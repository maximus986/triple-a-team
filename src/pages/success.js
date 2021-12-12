/** @jsx jsx */
import React from 'react';
import { Seo, Info } from 'components';
import { jsx } from 'theme-ui';
import { GiCheckMark } from 'react-icons/gi';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

// TODO: Query text from contentful

const Success = ({ data: { waterMarkImage } }) => {
  const image = getImage(waterMarkImage.childImageSharp);
  return (
    <>
      <Seo title="3ATeam" />
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
          Poštovani, vaša poruka je uspešno primljena.
        </h2>
        <p sx={{ mb: 3, fontSize: [null, null, null, null, null, 6] }}>
          Potrudićemo se da vam odgovorimo u što kraćem roku.
        </p>
        <p sx={{ mb: 5, fontSize: [null, null, null, null, null, 6] }}>
          Srdačno, vaš 3ATeam.
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
  }
`;
