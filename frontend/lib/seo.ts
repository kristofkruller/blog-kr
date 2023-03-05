import { Article, DefaultMeta } from "blog";
import { Metadata } from "next";

export function MetaTree ({ data }: DefaultMeta, faviconUrl: string, shareImgUrl: string): Metadata {
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
    } || {},
    
    twitter: {
      site: data.attributes.siteName,
      title: data.attributes.seo.metaTitle,
      description: data.attributes.seo.metaDescription,
      creator: 'Kristof Kruller',
      images: shareImgUrl
    } || {}
  }
}

export function ArticleSeo ({ attributes }: Article, imgUrl: string): Metadata {
  const siteTitle = "Kruller's blog";
  
  return {
    title: `${attributes.title} - ${siteTitle}`,
    description: attributes.description,
    applicationName: siteTitle,
    creator: 'Kristof Kruller',
    keywords: `${ attributes.categories.data.map(cat => cat.attributes.slug) }, nexjs, react, blog, porfolio, tech, javascript, webdev, development, frontend, backend, fullstack`,
    robots: "index, follow",
    category: `${ attributes.categories.data.map(cat => cat.attributes.name) }`,
    icons: ["favicon", imgUrl],
    assets: imgUrl,

    openGraph: {
      siteName: siteTitle,
      title: attributes.title,
      description: attributes.description,
      type: 'website',
      locale: 'en-HU',
      images: imgUrl,
    },
    
    twitter: {
      site: siteTitle,
      title: attributes.title,
      description: attributes.description,
      creator: 'Kristof Kruller',
      images: imgUrl,
    }
  }
}