import React, { FC } from "react";

import { getStrapiMedia } from "lib/strapi/media";

import { DefaultMeta } from "blog";

interface DynamicProps {
  dynamic: DefaultMeta;
}

const HeadMeta: FC<DynamicProps> = ({ dynamic }) => {

  const dId = dynamic.data?.id;
  const dynamicData = dynamic.data?.attributes;
  const currentSeo = dynamicData.seo;

  return (
    <>
      {/* DYNAMIC BY PAGE */}
      {/* title */}
      {dynamicData.siteName && (
        <>
          <title key={dId + dynamicData.siteName + dId}>{dynamicData.siteName}</title>
          <meta key={dId + "og:title"} property="og:title" content={dynamicData.siteName} />
          <meta key={dId + "twitter:title"} name="twitter:title" content={dynamicData.siteName} />
        </>
      )}
      {dynamicData.hero && (
        <>
          <title key={dynamicData.hero.title + dId}>{dynamicData.hero.title}</title>
          <meta key={dynamicData.hero.title + "og"} property="og:title" content={dynamicData.hero.title} />
          <meta key={dynamicData.hero.title + "tweet"} name="twitter:title" content={dynamicData.hero.title} />
        </>
      )}
      {/* description and media */}
      {currentSeo.metaDescription && (
        <>
          <meta key={currentSeo.metaDescription + "desc"} name="description" content={currentSeo.metaDescription} />
          <meta key={currentSeo.metaDescription + "og"} property="og:description" content={currentSeo.metaDescription} />
          <meta key={currentSeo.metaDescription + "tweet"} name="twitter:description" content={currentSeo.metaDescription} />
        </>
      )}
      {dynamicData.shareImage && (
        <>
          <meta key={dynamicData.shareImage.data.attributes.hash + "og"} property="og:image" content={getStrapiMedia(dynamicData.shareImage)}/>
          <meta key={dynamicData.shareImage.data.attributes.hash + "tweet"} name="twitter:image" content={getStrapiMedia(dynamicData.shareImage)}/>
          <meta key={dynamicData.shareImage.data.attributes.hash + "img"} name="image" content={getStrapiMedia(dynamicData.shareImage)}/>
        </>
      )}
      {dynamicData.favicon && (
        <link key={dynamicData.favicon.data.attributes.hash + "fav"} rel="icon" href={getStrapiMedia(dynamicData.favicon)} />
      )}
      
      {/* static - site_name and misc */}
      <meta key="Kruller's portfolio and blog" property="og:site_name" content="Kruller's portfolio and blog" />
      <meta key="summary_large_image" name="twitter:card" content="summary_large_image" />
      <meta key={dId} content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
};

export default HeadMeta;