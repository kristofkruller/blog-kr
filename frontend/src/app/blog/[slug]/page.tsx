import { fetchAPI } from 'lib/strapi/api';
import React from 'react'
import { Article } from 'blog';
import { getStrapiMedia } from 'lib/strapi/media';
import { Metadata } from 'next';
import Img from '@root/components/image/img';
import { createDebuggerStatement } from 'typescript';

// ISR REGEN

const env = process.env.NODE_ENV;
export const revalidate = env == "development" ? 1 : 600;

// S E O START

const fetchArticles = async () => {
  const response = await fetchAPI("/articles", {
    populate: "*"
  })
  return response;
}

export async function generateMetadata({ params }:any): Promise<Metadata> {
  
  const { data } = await fetchArticles();
  const current: Article = data.filter((article: Article) => article.attributes.slug === params.slug)[0];
  
  const articleImg = await getStrapiMedia(current.attributes.image);

  return {

    title: current.attributes.title,
    description: current.attributes.description,
    applicationName: "Kruller's blog",
    creator: 'Kristof Kruller',
    keywords: 'nexjs, react, blog, porfolio, tech, javascript, webdev, development, frontend, backend, fullstack',
    robots: "index, follow",
    category: "portfolio, blog",
    icons: ["favicon", articleImg],
    assets: articleImg,

    openGraph: {
      siteName: "Kruller's blog",
      title: current.attributes.title,
      description: current.attributes.description,
      type: 'website',
      locale: 'en-HU',
      images: articleImg,
    },
    
    twitter: {
      site: "Kruller's blog",
      title: current.attributes.title,
      description: current.attributes.description,
      creator: 'Kristof Kruller',
      images: articleImg,
    }

  }
}

// S E O END

export default async function ArticlePage ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const { data } = await fetchArticles();
  const current: Article = data.filter((article: Article) => article.attributes.slug === params.slug)[0];

  return (
    <>
      <h1>{current.attributes.title}</h1>
      <Img image={current.attributes.image}/>
      <p>{current.attributes.description}</p>
    </>
  )
}