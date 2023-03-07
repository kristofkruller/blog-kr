import { Metadata } from "next";
import { DefaultMeta } from "blog";
import { MetaTree } from "../components/seo";

import styles from "../styles/portfolio.module.scss"

// S E O START
const fetchSiteSeo = async () => {
  const response = await fetch("");
  return response;
}

export async function generateMetadata({ params }: { params:{slug: string} } ): Promise<Metadata> {
  // const meta : DefaultMeta = await fetchSiteSeo();
  // const faviconUrl = await getStrapiMedia(meta.data.attributes.favicon);
  // const shareImgUrl = await getStrapiMedia(meta.data.attributes.shareImage);

  // return MetaTree(meta, faviconUrl, shareImgUrl);
}
// S E O END

export default function Home() {

  return (
    <main className={styles.landing}>
      <section key="home" id="home" className={styles.greetSection}>
        <div>
          <h3 className={styles.greet}>Hi I am Kristof and this is my</h3>
          <h1><span>Portfolio</span>and<span>blog</span></h1>
        </div>
      </section>
      <section key="portfolio" id="portfolio">
        <h1>Portfolio</h1>
      </section>
      <section key="contact" id="contact">
        <h1>Contact</h1>
      </section>
      <section key="about" id="about">
        <h1>About</h1>
      </section>
    </main>

  )
}
