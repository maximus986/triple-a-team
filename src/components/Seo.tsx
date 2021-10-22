import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from 'hooks';

type NameMetaObj = {
  name: string;
  content: string;
};

type PropertyMetaObj = {
  property: string;
  content: string;
};

type Meta = ConcatArray<NameMetaObj | PropertyMetaObj>;

interface SeoProps {
  title: string;
  pageDescription?: string;
  lang?: string;
  meta?: Meta;
}

export const Seo: FunctionComponent<SeoProps> = ({
  pageDescription = '',
  lang = 'sr',
  meta = [],
  title,
}) => {
  const { title: siteTitle, description, keywords, author } = useSiteMetadata();

  const metaDescription = pageDescription || description;
  const metaKeywords = keywords;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
