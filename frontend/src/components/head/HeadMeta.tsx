import React, { FC } from "react";

import { getStrapiMedia } from "lib/strapi/media";

import { DefaultMeta } from "blog";

interface DynamicProps {
  dynamic: DefaultMeta;
}

const HeadMeta: FC<DynamicProps> = ({ dynamic }) => {

  const dynamicData = dynamic.data?.attributes;
  const currentSeo = dynamicData.seo;

  return (
    <>
      {/* DYNAMIC BY PAGE */}
      {/* title */}
      {dynamicData.siteName && (
        <>
          <title>{dynamicData.siteName}</title>
          <meta property="og:title" content={dynamicData.siteName} />
          <meta name="twitter:title" content={dynamicData.siteName} />
        </>
      )}
      {dynamicData.hero && (
        <>
          <title>{dynamicData.hero.title}</title>
          <meta property="og:title" content={dynamicData.hero.title} />
          <meta name="twitter:title" content={dynamicData.hero.title} />
        </>
      )}
      {/* description and media */}
      {currentSeo.metaDescription && (
        <>
          <meta name="description" content={currentSeo.metaDescription} />
          <meta property="og:description" content={currentSeo.metaDescription} />
          <meta name="twitter:description" content={currentSeo.metaDescription} />
        </>
      )}
      {dynamicData.shareImage && (
        <>
          <meta property="og:image" content={getStrapiMedia(dynamicData.shareImage)}/>
          <meta name="twitter:image" content={getStrapiMedia(dynamicData.shareImage)}/>
          <meta name="image" content={getStrapiMedia(dynamicData.shareImage)}/>
        </>
      )}
      {dynamicData.favicon && (
        <link rel="icon" href={getStrapiMedia(dynamicData.favicon)} />
      )}
      
      {/* static - site_name and misc */}
      <meta property="og:site_name" content="Kruller's portfolio and blog" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
};

export default HeadMeta;