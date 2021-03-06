import { Box } from '@theme-ui/components';
import React from 'react';
import { navLinks } from 'static/nav-links';
import { NavLink } from './NavLink';

export const NavItems = ({ onNavigate }) => {
  return (
    <Box
      as="ul"
      sx={{ py: [3, null, 0], display: [null, null, 'flex'], mb: [2, null, 0] }}
    >
      {navLinks
        .filter((link) => link.path !== 'hero')
        .map(({ path, text, icon }) => {
          const Icon = icon;
          return (
            <NavLink
              onNavigate={onNavigate}
              to={path}
              key={path}
              Icon={<Icon />}
            >
              {text}
            </NavLink>
          );
        })}
    </Box>
  );
};
