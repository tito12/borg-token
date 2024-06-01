import React, { ReactNode } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { TTCommonsRegular, TTCommonsDemiBold } from "../config/fonts";

interface SEOProps {
  title: string;
  image: string;
  description: string;
  children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  image,
  description,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: siteUrl + image || siteUrl + defaultImage,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
      <meta name="twitter:site" content="@site" />
      <meta name="twitter:url" content={siteUrl} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={siteUrl} />

      <link
        rel="preload"
        href={TTCommonsRegular}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={TTCommonsDemiBold}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {children}
    </>
  );
};

export default SEO;
