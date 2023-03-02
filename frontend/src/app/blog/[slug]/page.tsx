"use client"

import { clientSideFetchAPI } from 'lib/strapi/api';
import React, { useEffect, useState } from 'react'
import { Article } from 'blog';
import LoadingScreen from '@root/components/tools/LoadingScreen';

const env = process.env.NODE_ENV;
export const revalidate = env == "development" ? 1 : 600;

interface FrontEndArticles {
  data: Article[];
  meta: any;
}

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {

  const [articleState, setArticle] = useState<FrontEndArticles | null>();
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);
    clientSideFetchAPI(
      "/articles", 
      {populate: "*"},
      {},
      setArticle,
      setLoad
    );
  }, []);

  return (
    <>
      { load ? (
        <LoadingScreen />
      ) : (
      <>
        { 
          articleState && articleState.data
          .filter((article: Article) => article.attributes.slug === params.slug)
          .map(({ attributes }: Article) => (
            <h1 key={attributes.title}>{attributes.title}</h1>
          ))
        }
      </>
      )}
    </>
  )
}

export default page