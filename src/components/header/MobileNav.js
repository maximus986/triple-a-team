/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';
import { navLinks } from 'static/nav-links';

export const MobileNav = ({ showNav, onNavigate }) => (
  <Box
    as="nav"
    sx={{
      height: showNav ? '200px' : 0,
      overflow: 'hidden',
      transition: 'height 0.3s ease',
    }}
  >
    <Box as="ul" sx={{ py: 6 }}>
      {navLinks.map((navItem) => (
        <li key={navItem.text}>
          <a href={navItem.path} onClick={onNavigate}>
            {navItem.text}
          </a>
        </li>
      ))}
    </Box>
  </Box>
);
