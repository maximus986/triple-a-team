import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SectionContainer } from './SectionContainer';

export const Activities = () => {
  const {
    contentfulActivitySection: { activitySectionTitle },
  } = useStaticQuery(graphql`
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
    <SectionContainer sectionTitle={activitySectionTitle}></SectionContainer>
  );
};
