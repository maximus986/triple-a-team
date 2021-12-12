/** @jsx jsx */
import React from 'react';
import { Seo, Info } from 'components';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Success = ({
  data: {
    waterMarkImage,
    contentfulContactSuccess: { title, info, greeting },
  },
}) => {
  const image = getImage(waterMarkImage.childImageSharp);
  return (
    <>
      <Seo title="Success" />
      <Info>
        <GatsbyImage
          image={image}
          alt={waterMarkImage.name}
          sx={{
            width: ['200px', null, '300px'],
            height: '100%',
            '& > div': { height: '100%' },
          }}
        />
        <h2 sx={{ my: 5, fontSize: [null, null, null, null, null, 11] }}>
          {title}
        </h2>
        <p sx={{ mb: 3, fontSize: [null, null, null, null, null, 6] }}>
          {info}
        </p>
        <p sx={{ mb: 5, fontSize: [null, null, null, null, null, 6] }}>
          {greeting}
        </p>
      </Info>
    </>
  );
};

export default Success;

export const PAGE_QUERY = graphql`
  {
    waterMarkImage: file(relativePath: { eq: "waterMark.png" }) {
      name
      childImageSharp {
        gatsbyImageData(formats: PNG, placeholder: BLURRED)
      }
    }
    contentfulContactSuccess {
      title
      info
      greeting
    }
  }
`;
