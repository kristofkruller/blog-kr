import { getStrapiMedia } from "lib/media";
import { FC } from "react";
interface Meta {
  meta: {
    data: {
      attributes: {
        siteName?: string,
        seo: {
          metaTitle?: string,
          metaDescription: string,
          shareImage: any,
          article?: boolean,
        }
        favicon?: any,
        hero?: {
          title?: string,
        },
      }
    }
  },
  favicon?: any,
}

const Seo: FC<Meta> = ({ meta }) => {

  const metaData = meta.data?.attributes;
  const currentSeo = metaData.seo;

  return (
    <>
      {metaData.siteName && (
        <>
          <title>{metaData?.siteName}</title>
          <meta property="og:title" content={metaData?.siteName} />
          <meta name="twitter:title" content={metaData?.siteName} />
        </>
      )}
      {metaData.hero?.title && (
        <>
          <title>{metaData.hero.title}</title>
          <meta property="og:title" content={metaData.hero.title} />
          <meta name="twitter:title" content={metaData.hero.title} />
        </>
      )}
      {currentSeo.metaDescription && (
        <>
          <meta name="description" content={currentSeo.metaDescription} />
          <meta property="og:description" content={currentSeo.metaDescription} />
          <meta name="twitter:description" content={currentSeo.metaDescription} />
        </>
      )}
      {currentSeo.shareImage && (
        <>
          <meta property="og:image" content={getStrapiMedia(currentSeo.shareImage)} />
          <meta name="twitter:image" content={getStrapiMedia(currentSeo.shareImage)} />
          <meta name="image" content={getStrapiMedia(currentSeo.shareImage)} />
        </>
      )}

      {currentSeo.article && <meta property="og:type" content="article" />}
      {metaData.favicon && (
        <link rel="icon" href={getStrapiMedia(metaData.favicon)} />
      )}
      {/* static */}
      <meta property="og:site_name" content={metaData?.siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
};

export default Seo;