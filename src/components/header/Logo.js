/** @jsx jsx */
import { jsx } from 'theme-ui';
import logo from 'images/logo.png';
import { useScroll } from 'hooks';

export const Logo = ({ onCloseNav }) => {
  const scroll = useScroll();
  return (
    <a
      href="#home"
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
      onClick={onCloseNav}
    >
      <img src={logo} alt="" sx={{ height: '100%' }} />
    </a>
  );
};
