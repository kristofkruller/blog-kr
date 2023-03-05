import Articles from '@root/components/articles/Articles';
import { DefaultMeta } from 'blog';
import { MetaTree } from 'lib/seo';
import { fetchAPI } from 'lib/strapi/api';
import { getStrapiMedia } from 'lib/strapi/media';
import { Metadata } from 'next';

import styles from "./blog.module.scss"

// ISR REGEN
const env = process.env.NODE_ENV;
export const revalidate = env == "development" ? 1 : 600;

// S E O START
const fetchBlogSeo = async () => {
  const response = await fetchAPI("/homepage", {
    populate: "*"
  })
  return response;
}

export async function generateMetadata({ params }: { params:{slug: string} }): Promise<Metadata> {
  const meta: DefaultMeta = await fetchBlogSeo();
  const faviconUrl = await getStrapiMedia(meta.data.attributes.favicon);
  const shareImgUrl = await getStrapiMedia(meta.data.attributes.shareImage);

  const BlogTree = MetaTree(meta, faviconUrl, shareImgUrl);
  const heroTitle = meta.data.attributes.hero.title;
  BlogTree.title = heroTitle;
  if (BlogTree.openGraph) BlogTree.openGraph.siteName = heroTitle;
  if (BlogTree.twitter) BlogTree.twitter.site = heroTitle;
  
  return BlogTree;

}
// S E O END

const fetchAllArticles = async () => {
  const response = await fetchAPI("/articles", {
    populate: "*", sort: ['publishedAt:desc'],
  }
  );

  return response;
}

export default async function ArticlesHome() {
  
  const { data } = await fetchAllArticles();

  return (
    <main className={styles.landing}>
      <h1>All blog posts</h1>
      <Articles collection={ data }/>
    </main>
  )
}