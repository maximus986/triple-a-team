/** @jsx jsx */
import { Box } from '@theme-ui/components';
import { jsx } from 'theme-ui';
import { MobileContactInfo } from './MobileContactInfo';
import { NavItems } from './NavItems';

export const MobileNav = ({ showNav, onNavigate }) => (
  <Box
    as="nav"
    sx={{
      height: showNav ? '250px' : 0,
      overflow: 'hidden',
      transition: 'default',
      display: [null, null, 'none'],
    }}
  >
    <NavItems onNavigate={onNavigate} />
    <MobileContactInfo />
  </Box>
);
