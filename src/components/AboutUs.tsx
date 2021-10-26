import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const AboutUs = () => {
  const { contentfulAboutUs } = useStaticQuery<{
    // eslint-disable-next-line no-undef
    contentfulAboutUs: GatsbyTypes.Query['contentfulAboutUs'];
  }>(graphql`
    {
      contentfulAboutUs {
        sectionTitle
        aboutUsDescription {
          aboutUsDescription
        }
      }
    }
  `);

  return (
    <div>
      <h2>{contentfulAboutUs?.sectionTitle}</h2>
      <pre>{JSON.stringify(contentfulAboutUs, null, 2)}</pre>
    </div>
  );
};
