/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from '@theme-ui/components';
import { MobileNav } from './MobileNav';
import { useCallback, useState } from 'react';
import { Nav } from './Nav';
import { ContactInfo } from './ContactInfo';
import { Container } from '../Container';
import { Logo } from './Logo';
import { MobileMenuButton } from './MobileMenuButton';
import { useShowNav } from 'hooks';

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = useCallback(() => {
    setShowNav(false);
  }, []);

  const display = useShowNav();

  if (!display) {
    return null;
  }

  return (
    <Box
      as="header"
      sx={{
        bg: 'primaryBackground',
        pr: [0, 0, 3],
        pt: [3],
        pb: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container>
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ContactInfo />
          <Logo onCloseNav={closeNav} />
          <MobileMenuButton toggle={setShowNav} toggled={showNav} />
          <Nav />
        </Flex>
        <MobileNav showNav={showNav} onNavigate={closeNav} />
      </Container>
    </Box>
  );
};
