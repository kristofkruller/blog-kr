"use client"

import { clientSideFetchAPI } from 'lib/strapi/api';
import React, { useEffect, useState } from 'react'

const page = ({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {

  const [article, setArticle] = useState(null);

  useEffect(() => {
    clientSideFetchAPI(
      "/articles", 
      // { fields: ["slug"]},
      {populate: "*"},
      {},
      setArticle
    )
    
  }, []);  

  console.log(article)

  return (
    <>
      <h1></h1>
      <div>{params.id}</div>
    </>
  )
}

export default page