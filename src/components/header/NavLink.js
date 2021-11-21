/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { IconContainer } from './IconContainer';

export const NavLink = ({ to, onNavigate, Icon, children, isLinkActive }) => {
  return (
    <li
      sx={{
        '&:nth-of-type(2)': {
          mx: [null, null, 2, 3],
        },
      }}
    >
      <Flex
        as="a"
        href={to}
        onClick={onNavigate}
        sx={{
          fontSize: [4, null, 2],
          color: isLinkActive ? 'primaryBackground' : 'textPassive',
          alignItems: 'center',
          transition: '0.3s ease',
          bg: isLinkActive ? 'primary' : 'transparent',
          '&:hover': { bg: 'primary', color: 'primaryBackground' },
          borderRadius: [null, null, 'navLink'],
          px: [4, null, 3, 4],
          py: [3, null, 4],
        }}
      >
        <IconContainer style={{ display: [null, null, 'none'] }}>
          {Icon}
        </IconContainer>
        <span sx={{ lineHeight: 'reset' }}>{children}</span>
      </Flex>
    </li>
  );
};
