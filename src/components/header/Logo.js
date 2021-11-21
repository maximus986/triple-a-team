/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useScroll } from 'hooks';
import { navigate } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <a
      href="javascript:void(0);"
      sx={{
        height: [
          '50px',
          null,
          scroll ? '55px' : ' 75px',
          null,
          scroll ? '65px' : '85px',
          scroll ? '80px' : '100px',
        ],
        display: 'block',
        pl: [3, null, 0],
        transition: 'all 0.3s ease',
      }}
      onClick={() => handleLogoClick()}
    >
      <GatsbyImage
        image={image}
        alt={logoImage.name}
        sx={{ height: '100%', '& > div': { height: '100%' } }}
      />
    </a>
  );
};
