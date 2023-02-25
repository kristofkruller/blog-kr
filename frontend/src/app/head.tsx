import { fetchAPI } from "lib/strapi/api";
import HeadMeta from "@root/components/head/HeadMeta";

const fetchGlobalData = async () => {
  const response = await fetchAPI("/global", {
    populate: "*"
  });

  return response;
}

export default async function Head() {

  const defaultRes = await fetchGlobalData();
  
  return (
    <>
      <HeadMeta dynamic={defaultRes} />
    </>
  )
}
