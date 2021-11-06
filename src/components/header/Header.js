/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import { MobileNav } from './MobileNav';
import logo from 'images/logo.png';
import { useCallback, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = useCallback(() => {
    setShowNav(false);
  }, []);

  return (
    <Box
      as="header"
      sx={{
        bg: 'primaryBackground',
        pl: 3,
        pt: 3,
        pb: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#home"
          sx={{ height: '50px', display: 'block' }}
          onClick={closeNav}
        >
          <img src={logo} alt="" sx={{ height: '100%' }} />
        </a>
        <Hamburger
          size={20}
          toggled={showNav}
          toggle={setShowNav}
          label="Show menu"
          direction="right"
        />
      </Flex>
      <MobileNav showNav={showNav} onNavigate={closeNav} />
    </Box>
  );
};
