/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Paragraph } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SectionContainer } from './SectionContainer';
import { ScrollTarget } from './ScrollTarget';

export const AboutUs = () => {
  const {
    contentfulAboutUs: {
      sectionTitle,
      aboutUsDescription: { aboutUsDescription },
    },
  } = useStaticQuery(graphql`
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
    <ScrollTarget target="aboutUs">
      <SectionContainer sectionTitle={sectionTitle}>
        <Paragraph sx={{ mx: [4, 0] }}>{aboutUsDescription}</Paragraph>
      </SectionContainer>
    </ScrollTarget>
  );
};
