import React from 'react';
import Articles from '@root/components/articles/Articles';
import { fetchAPI } from 'lib/strapi/api';

const fetchAllArticles = async () => {
  const response = await fetchAPI("/articles", {
    populate: "*"
  });

  return response;
}

const layout = async ({ children }:{children:React.ReactNode}) => {

  const { data } = await fetchAllArticles();

  return (
    <>
      { children }
      <Articles collection={ data }/>
    </>
  )
}

export default layout