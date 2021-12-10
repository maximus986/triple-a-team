/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { IconContainer } from './IconContainer';

export const NavLink = ({ to, onNavigate, Icon, children }) => {
  return (
    <li
      sx={{
        '&:nth-of-type(2)': {
          mx: [null, null, 2, 3],
        },
        '& a.active-scroll-spy': {
          color: 'primaryBackground',
          bg: 'primary',
        },
      }}
    >
      <Flex
        as="a"
        href={`#${to}`}
        data-to-scrollspy-id={to}
        onClick={onNavigate}
        sx={{
          fontSize: [4, null, 2],
          alignItems: 'center',
          transition: 'default',
          '&:hover': { bg: 'primary', color: 'primaryBackground' },
          borderRadius: [null, null, 'default'],
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
