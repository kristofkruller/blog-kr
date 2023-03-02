import Articles from '@root/components/articles/Articles';
import { DefaultMeta } from 'blog';
import { fetchAPI } from 'lib/strapi/api';
import { getStrapiMedia } from 'lib/strapi/media';
import { Metadata } from 'next';

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

export async function generateMetadata({ params }:any): Promise<Metadata> {
  const { data }: DefaultMeta = await fetchBlogSeo();
  const faviconUrl = await getStrapiMedia(data.attributes.favicon);
  const shareImgUrl = await getStrapiMedia(data.attributes.shareImage);

  return {

    title: data.attributes.hero.title,
    description: data.attributes.seo.metaDescription,
    applicationName: data.attributes.seo.metaTitle,
    creator: 'Kristof Kruller',
    keywords: 'nexjs, react, blog, porfolio, tech, javascript, webdev, development, frontend, backend, fullstack',
    robots: "index, follow",
    category: "portfolio, blog",
    icons: ["favicon", faviconUrl],
    assets: shareImgUrl,

    openGraph: {
      siteName: data.attributes.hero.title,
      title: data.attributes.seo.metaTitle,
      description: data.attributes.seo.metaDescription,
      type: 'website',
      locale: 'en-HU',
      images: shareImgUrl,
    },
    
    twitter: {
      site: data.attributes.hero.title,
      title: data.attributes.seo.metaTitle,
      description: data.attributes.seo.metaDescription,
      creator: 'Kristof Kruller',
      images: shareImgUrl,
    }

  }
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
    <>
      <h1>All blog posts</h1>
      <Articles collection={ data }/>
    </>
  )
}