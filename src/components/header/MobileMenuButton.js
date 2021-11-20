/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';
import { Fade as Hamburger } from 'hamburger-react';

export const MobileMenuButton = ({ toggle, toggled }) => {
  return (
    <Box sx={{ display: [null, null, 'none'] }}>
      <Hamburger
        size={20}
        toggled={toggled}
        toggle={toggle}
        label="Show menu"
        direction="right"
        color="black"
      />
    </Box>
  );
};
