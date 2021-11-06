import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Banner = () => {
  const { allContentfulBanner } = useStaticQuery(graphql`
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
