import Articles from '@root/components/articles/articles';
import { StaticBlogSeo } from '@root/components/seo';
import styles from "./blog.module.scss"

// ISR REGEN
const env = process.env.NODE_ENV;
export const revalidate = env === "development" ? 1 : 600;

// S E O START
export const metadata = StaticBlogSeo();
// S E O END

const fetchAllArticles = async () => {
  const response = await fetch(`${env === "development" ? (process.env.NEXT_PUBLIC_DEVHOST) : (process.env.NEXT_PUBLIC_HOSTNAME)}api/post`);
  return await response.json();
}

export default async function ArticlesHome() {
  const allPosts = await fetchAllArticles();

  console.log(allPosts)

  return (
    <main className={styles.landing}>
      <h1>All blog posts</h1>
      <Articles collection={ allPosts }/>
    </main>
  )
}