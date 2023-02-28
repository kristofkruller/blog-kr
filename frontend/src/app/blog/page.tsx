import Articles from '@root/components/articles/Articles';
import { fetchAPI } from 'lib/strapi/api';

const fetchAllArticles = async () => {
  const response = await fetchAPI("/articles", {
    populate: "*", sort: ['publishedAt:desc'],
  }
  );

  return response;
}

export default async function ArticlesHome() {

  const { data } = await fetchAllArticles();

  return (
    <>
      <h1>All blog posts</h1>
      <Articles collection={ data }/>
    </>
  )
}