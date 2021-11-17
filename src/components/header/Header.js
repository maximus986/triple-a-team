/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import { MobileNav } from './MobileNav';
import logo from 'images/logo.png';
import { useCallback, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { Nav } from './Nav';
import { ContactInfo } from './ContactInfo';

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = useCallback(() => {
    setShowNav(false);
  }, []);

  return (
    <Box
      as="header"
      sx={{
        bg: 'secondaryBackground',
        pr: [0, 0, 3],
        pt: [3],
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
        <ContactInfo />
        <a
          href="#home"
          sx={{
            height: ['50px', null, '100px'],
            display: 'block',
            pl: 3,
          }}
          onClick={closeNav}
        >
          <img src={logo} alt="" sx={{ height: '100%' }} />
        </a>
        <Box sx={{ display: [null, null, 'none'] }}>
          <Hamburger
            size={20}
            toggled={showNav}
            toggle={setShowNav}
            label="Show menu"
            direction="right"
            color="black"
          />
        </Box>
        <Nav />
      </Flex>
      <MobileNav showNav={showNav} onNavigate={closeNav} />
    </Box>
  );
};
