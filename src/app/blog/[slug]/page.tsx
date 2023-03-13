import React from 'react'
import { Article } from 'blog';
import { Metadata } from 'next';
import { fetchApi } from '@root/helpers/fetchProcess';
import Image from 'next/image';

// ISR REGEN
export const revalidate = process.env.NODE_ENV === "development" ? 1 : 600;

// export async function generateMetadata({ params }:any): Promise<Metadata> {
  
//   const articleData = await fetchApi("post",params.slug);
//   // const current: Article = await articleData.data.filter((article: Article) => article.attributes.slug === params.slug)[0];

//   return ArticleSeo(current, articleImg);

// }

export default async function ArticlePage ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const article: Promise<Article[]> = await fetchApi("post",params.slug);
  const value = await article;
  console.log(value);
  return (
    <>
      {
      value.map(article => ( 
        <>
          <h1>{article.title}</h1>
          <Image src={article.imageUrl} alt={`Lead illustration for ${article.title}`} width={1920} height={1080}/>
          <h2>{article.description}</h2>
          <span key={article.category_name}>
            {`#${article.category_name.toUpperCase()}`}
          </span>
          
        </>
      ))
      }
    </>
  )
}