import React from 'react';
import Articles from '@root/components/articles/articles';
import { fetchAPI } from 'lib/api';

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
      <Articles collection={ data }/>
      { children }
    </>
  )
}

export default layout