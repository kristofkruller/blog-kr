import { fetchAPI } from "lib/api";
import { getStrapiMedia } from "lib/media";
import Seo from "@root/components/seo/seo";

const fetchGlobalData = async () => {
  const globalRes = await fetchAPI("/global", {
    populate: "*"
  });

  return globalRes;
}

export default async function Head() {

  const globalMeta = await fetchGlobalData();
  const favicon = getStrapiMedia(globalMeta.data.attributes.favicon);
  return (
    <Seo 
      meta={globalMeta} 
      favicon={favicon}
    />
  )
}
