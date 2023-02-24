import { fetchAPI } from "lib/api";
import Seo from "@root/components/seo";

const fetchGlobalData = async () => {
  const globalRes = await fetchAPI("/global", {
    populate: "*"
  });

  return globalRes;
}

export default async function Head() {

  const globalMeta = await fetchGlobalData();

  return (
    <Seo meta={globalMeta} />
  )
}
