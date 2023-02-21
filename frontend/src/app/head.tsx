import { fetchAPI } from "lib/api";
import { getStrapiMedia } from "lib/media";

const fetchGlobalData = async () => {
  const globalRes = await fetchAPI("/global", {
    populate: "*"
  });

  return globalRes.data.attributes;
}

export default async function Head() {

  const {siteName, defaultSeo, favicon} = await fetchGlobalData();

  return (
    <>
      <title>{siteName}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name={defaultSeo.metaTitle} content={defaultSeo.meta} />
      <link rel="icon" 
      href={getStrapiMedia(favicon)}
      />
    </>
  )
}
