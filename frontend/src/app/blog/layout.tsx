import React from 'react'

import { fetchAPI } from "lib/api";
import Seo from "@root/components/seo/seo";

// const fetchHome = async () => {
//   const response = await fetchAPI("/homepage", {
//     populate:"*"
//   })
//   return response;
// }

const layout = async ({ children }:{children:React.ReactNode}) => {
  // const homeSeo = await fetchHome();

  // console.log(homeSeo.data.attributes);

  return (
    <>
      {/* <Seo 
        meta={homeSeo}
        overwrite={true}
        key={"home"}
      /> */}
      { children }
    </>
  )
}

export default layout