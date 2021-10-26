import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ContentfulBannerConnection } from '../../graphql-types';

export const Banner = () => {
  const { allContentfulBanner } = useStaticQuery<{
    allContentfulBanner: ContentfulBannerConnection;
  }>(graphql`
    {
      allContentfulBanner {
        nodes {
          title
          image {
            fluid(toFormat: WEBP) {
              src
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <h2>Banner</h2>
      <pre>{JSON.stringify(allContentfulBanner, null, 2)}</pre>
    </div>
  );
};
