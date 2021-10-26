import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Activities = () => {
  const { contentfulActivitySection } = useStaticQuery<{
    // eslint-disable-next-line no-undef
    contentfulActivitySection: GatsbyTypes.Query['contentfulActivitySection'];
  }>(graphql`
    {
      contentfulActivitySection {
        activitySectionTitle
        activity {
          activityCategory
          activityDescription {
            activityDescription
          }
          activityImage {
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
      <h2>{contentfulActivitySection?.activitySectionTitle}</h2>
      <pre>{JSON.stringify(contentfulActivitySection, null, 2)}</pre>
    </div>
  );
};
