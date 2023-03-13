import Articles from '@root/components/articles/articles';
import { StaticBlogSeo } from '@root/components/seo';
import { fetchApi } from '@root/helpers/fetchProcess';
import styles from "./blog.module.scss"

// ISR REGEN
export const revalidate = process.env.NODE_ENV === "development" ? 1 : 600;

// SEO
export const metadata = StaticBlogSeo();

export default async function ArticlesHome() {
  const allPosts = await fetchApi("post");
  
  return (
    <main className={styles.landing}>
      <h1>All blog posts</h1>
      <Articles collection={ allPosts }/>
    </main>
  )
}