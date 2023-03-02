import { fetchAPI } from "lib/strapi/api"
import { Metadata } from "next";
import { DefaultMeta } from "blog";
import { getStrapiMedia } from "lib/strapi/media";

// S E O START

const fetchSiteSeo = async () => {
  const response = await fetchAPI("/global", {
    populate: "*"
  });

  return response;
}

export async function generateMetadata({ params }:any): Promise<Metadata> {
  const { data }: DefaultMeta = await fetchSiteSeo();
  const faviconUrl = await getStrapiMedia(data.attributes.favicon);
  const shareImgUrl = await getStrapiMedia(data.attributes.shareImage);

  return {

    title: data.attributes.siteName,
    description: data.attributes.seo.metaDescription,
    applicationName: data.attributes.seo.metaTitle,
    creator: 'Kristof Kruller',
    keywords: 'nexjs, react, blog, porfolio, tech, javascript, webdev, development, frontend, backend, fullstack',
    robots: "index, follow",
    category: "portfolio, blog",
    icons: ["favicon", faviconUrl],
    assets: shareImgUrl,

    openGraph: {
      siteName: data.attributes.siteName,
      title: data.attributes.seo.metaTitle,
      description: data.attributes.seo.metaDescription,
      type: 'website',
      locale: 'en-HU',
      images: shareImgUrl,
    },
    
    twitter: {
      site: data.attributes.siteName,
      title: data.attributes.seo.metaTitle,
      description: data.attributes.seo.metaDescription,
      creator: 'Kristof Kruller',
      images: shareImgUrl
    }

  }
}

// S E O END

export default function Home() {

  return (
      <h1>Portfolio and blog</h1>
  )
}
