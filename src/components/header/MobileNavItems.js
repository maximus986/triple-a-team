import { Box } from '@theme-ui/components';
import React from 'react';
import { navLinks } from 'static/nav-links';
import { NavLink } from './NavLink';

export const MobileNavItems = ({ onNavigate }) => {
  return (
    <Box as="ul" sx={{ py: 3 }}>
      {navLinks.map(({ path, text, icon }) => {
        const Icon = icon;
        return (
          <NavLink onNavigate={onNavigate} to={path} key={path} Icon={<Icon />}>
            {text}
          </NavLink>
        );
      })}
    </Box>
  );
};
