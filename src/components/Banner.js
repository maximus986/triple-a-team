/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { Overlay } from './Overlay';
import BackgroundImage from 'gatsby-background-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from '@emotion/styled';
import { Container } from 'components';
import { Target } from './Target';

export const bannerSliderSettings = {
  autoplay: true,
  autoplaySpeed: 8000,
  infinite: true,
  speed: 5000,
  fade: true,
  cssEase: 'ease',
  pauseOnHover: false,
  arrows: false,
};

export const Banner = () => {
  const { allContentfulBanner } = useStaticQuery(graphql`
    {
      allContentfulBanner {
        nodes {
          title
          image {
            title
            gatsbyImageData(
              formats: WEBP
              layout: FULL_WIDTH
              placeholder: BLURRED
              breakpoints: [576, 768, 992, 1200, 1400]
              aspectRatio: 1.6
              resizingBehavior: FILL
            )
          }
        }
      }
    }
  `);
  return (
    <>
      <Target target="home" />
      <Slider {...bannerSliderSettings}>
        {allContentfulBanner.nodes.map((banner, i) => {
          const image = getImage(banner.image[0]);
          const bgImage = convertToBgImage(image);
          return (
            <React.Fragment key={i}>
              <StyledBackgroundImage
                {...bgImage}
                preserveStackingContext
                sx={{
                  height: ['35vh', null, '50vh', null, '70vh'],
                }}
                alt="image"
              >
                <Container>
                  <Flex sx={{ mt: [8, 10, 18, 22], justifyContent: 'center' }}>
                    <h1>{banner.title}</h1>
                  </Flex>
                </Container>
              </StyledBackgroundImage>
              <Overlay />
            </React.Fragment>
          );
        })}
      </Slider>
    </>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  position: static !important;
  display: flex;
  flex-direction: column;
`;
