import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ContentfulAboutUs } from '../../graphql-types';

export const AboutUs = () => {
  const { contentfulAboutUs } = useStaticQuery<{
    contentfulAboutUs: ContentfulAboutUs;
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
