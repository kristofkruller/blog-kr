
import { fetchAPI } from "lib/strapi/api";
import HeadMeta from "@root/components/head/HeadMeta";

const fetchHome = async () => {
  const response = await fetchAPI("/homepage", {
    populate: "*"
  })
  return response;
}

export default async function Head() {

  const homeSeo = await fetchHome();

  return (
    <HeadMeta dynamic={homeSeo} />
  )
}
