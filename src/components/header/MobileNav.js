/** @jsx jsx */
import { Box } from '@theme-ui/components';
import { jsx } from 'theme-ui';
import { MobileContactInfo } from './MobileContactInfo';
import { MobileNavItems } from './MobileNavItems';

export const MobileNav = ({ showNav, onNavigate }) => (
  <Box
    as="nav"
    sx={{
      height: showNav ? '300px' : 0,
      overflow: 'hidden',
      transition: 'height 0.3s ease',
      display: [null, null, 'none'],
    }}
  >
    <MobileNavItems onNavigate={onNavigate} />
    <MobileContactInfo />
  </Box>
);
