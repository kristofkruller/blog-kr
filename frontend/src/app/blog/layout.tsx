import Seo from '@root/components/seo/seo'
import { fetchAPI } from 'lib/api'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

const fetchHome = async () => {
  const response = await fetchAPI("/homepage", {
    populate:"*"
  })
  return response;
}
const layout = async ({ children }: PropsWithChildren) => {
  const homeSeo = await fetchHome();

  console.log(homeSeo.data.attributes);

  return (
    <>
      <Head>
        <Seo meta={homeSeo}></Seo>
      </Head>
      { children }
    </>
  )
}

export default layout