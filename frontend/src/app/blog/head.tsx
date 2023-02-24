
import { fetchAPI } from "lib/api";
import Seo from "@root/components/seo";

const fetchHome = async () => {
  const response = await fetchAPI("/homepage", {
    populate:"*"
  })
  return response;
}

export default async function Head() {
  const homeSeo = await fetchHome();

  return (
      <Seo meta={homeSeo} />
  )
}
