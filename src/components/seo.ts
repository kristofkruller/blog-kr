import { Article } from "blog";
import { Metadata } from "next";

export function StaticHomeSeo (): Metadata {
  return {
    title: "Kruller's portfolio and blog",
    description: "Portfolio and blog about web development",
    applicationName: "Kristof Kruller's portfolio site",
    creator: 'Kristof Kruller',
    keywords: 'nexjs, react, blog, porfolio, tech, javascript, web, webdev, development, frontend, backend, fullstack',
    robots: "index, follow",
    category: "portfolio, blog",
    icons: ["favicon", ""],
    assets: "",

    openGraph: {
      siteName: "Kruller's portfolio and blog",
      title: "Kristof Kruller's portfolio site",
      description: "Portfolio and blog about web development",
      type: 'website',
      locale: 'en-HU',
      images: "",
    } || {},
    
    twitter: {
      site: "Kruller's portfolio and blog",
      title: "Kristof Kruller's portfolio site",
      description: "Portfolio and blog about web development",
      creator: 'Kristof Kruller',
      images: ''
    } || {}
  }
}
export function StaticBlogSeo (): Metadata {
  return {
    title: "Kruller's portfolio and blog",
    description: "Blog about web development, experiences, solutions, advices",
    applicationName: "Kristof Kruller's blog site",
    creator: 'Kristof Kruller',
    keywords: 'nexjs, react, blog, porfolio, tech, javascript, web, webdev, development, frontend, backend, fullstack',
    robots: "index, follow",
    category: "portfolio, blog",
    icons: ["favicon", ""],
    assets: "",

    openGraph: {
      siteName: "Kruller's portfolio and blog",
      title: "Kristof Kruller's blog site",
      description: "Blog about web development, experiences, solutions, advices",
      type: 'website',
      locale: 'en-HU',
      images: "",
    } || {},
    
    twitter: {
      site: "Kruller's portfolio and blog",
      title: "Kristof Kruller's blog site",
      description: "Blog about web development, experiences, solutions, advices",
      creator: 'Kristof Kruller',
      images: ''
    } || {}
  }
}
// export function ArticleSeo ({ attributes }: Article, imgUrl: string): Metadata {
//   const siteTitle = "Kruller's blog";
  
//   return {
//     title: `${attributes.title} - ${siteTitle}`,
//     description: attributes.description,
//     applicationName: siteTitle,
//     creator: 'Kristof Kruller',
//     keywords: `${ attributes.categories.data.map(cat => cat.attributes.slug) }, nexjs, react, blog, porfolio, tech, javascript, webdev, development, frontend, backend, fullstack`,
//     robots: "index, follow",
//     category: `${ attributes.categories.data.map(cat => cat.attributes.name) }`,
//     icons: ["favicon", imgUrl],
//     assets: imgUrl,

//     openGraph: {
//       siteName: siteTitle,
//       title: attributes.title,
//       description: attributes.description,
//       type: 'website',
//       locale: 'en-HU',
//       images: imgUrl,
//     },
    
//     twitter: {
//       site: siteTitle,
//       title: attributes.title,
//       description: attributes.description,
//       creator: 'Kristof Kruller',
//       images: imgUrl,
//     }
//   }
// }