import { fetchAPI } from 'lib/strapi/api';
import React from 'react'
import { Article } from 'blog';
import { getStrapiMedia } from 'lib/strapi/media';
import { Metadata } from 'next';
import Img from '@root/components/image/img';
import { ArticleSeo } from 'lib/seo';

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
  
  const articleData = await fetchArticles();
  const current: Article = await articleData.data.filter((article: Article) => article.attributes.slug === params.slug)[0];
  
  const articleImg = await getStrapiMedia(current?.attributes.image);

  return ArticleSeo(current, articleImg);

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
  const current: Article = await data.filter((article: Article) => article.attributes.slug === params.slug)[0];
  console.log()
  return (
    <>
      <h1>{current.attributes.title}</h1>
      <Img image={current.attributes.image}/>
      <h2>{current.attributes.description}</h2>
      {
        current.attributes.categories && current.attributes.categories.data.map(cat => 
          <span key={cat.id}>
            {`#${cat.attributes.name.toUpperCase()}`}
          </span>
        )
      }
      <p>{current.attributes.content}</p>
    </>
  )
}