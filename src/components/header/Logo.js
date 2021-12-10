/** @jsx jsx */
import { useMemo } from 'react';
import { jsx } from 'theme-ui';
import { useScroll } from 'hooks';
import { navigate } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { navLinks } from 'static/nav-links';

export const Logo = ({ onCloseNav }) => {
  const { logoImage } = useStaticQuery(graphql`
    {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        name
        childImageSharp {
          gatsbyImageData(formats: PNG, placeholder: BLURRED)
        }
      }
    }
  `);

  // Logo is a png and that's why gatsby image is used. Logo should be svg, but client didn't provide.
  const image = getImage(logoImage.childImageSharp);
  const scroll = useScroll();

  const handleLogoClick = () => {
    onCloseNav();
  };

  const heroItemPath = useMemo(
    () => navLinks.find((item) => item.path === 'hero').path,
    [navLinks],
  );

  return (
    <a
      href={`#${heroItemPath}`}
      data-to-scrollspy-id={heroItemPath}
      sx={{
        height: [
          '40px',
          '45px',
          scroll ? '45px' : ' 65px',
          scroll ? '55px' : '75px',
          scroll ? '70px' : '90px',
        ],
        display: 'block',
        pl: [3, null, 0],
        transition: 'default',
      }}
      // onClick={() => handleLogoClick()}
    >
      <GatsbyImage
        image={image}
        alt={logoImage.name}
        sx={{ height: '100%', '& > div': { height: '100%' } }}
      />
    </a>
  );
};
