import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import { SectionContainer } from './SectionContainer';
import { Grid } from '@theme-ui/components';
import { Activity } from './Activity';
import { Target } from './Target';

export const Activities = () => {
  const {
    contentfulActivitySection: { activitySectionTitle, activities },
  } = useStaticQuery(graphql`
    {
      contentfulActivitySection {
        activitySectionTitle
        activities: activity {
          activityCategory
          activityDescription {
            activityDescription
          }
          id
          activityImage {
            title
            gatsbyImageData(
              formats: WEBP
              layout: FULL_WIDTH
              placeholder: BLURRED
              breakpoints: [576, 768, 992, 1200, 1400]
              aspectRatio: 1.6
            )
          }
        }
      }
    }
  `);
  return (
    <>
      <Target target="activities" />
      <SectionContainer sectionTitle={activitySectionTitle}>
        <Grid gap={[4]} columns={[1, null, null, null, [(2, '1fr 1fr 1fr')]]}>
          {activities.map((activity) => {
            return (
              <Fragment key={activity.id}>
                <Activity activity={activity} />
              </Fragment>
            );
          })}
        </Grid>
        <Grid gap={[4]} columns={[1, null, null, null, [(2, '1fr 1fr 1fr')]]}>
          {activities.map((activity) => {
            return (
              <Fragment key={activity.id}>
                <Activity activity={activity} />
              </Fragment>
            );
          })}
        </Grid>
      </SectionContainer>
    </>
  );
};
