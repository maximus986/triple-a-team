/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { IconContainer } from './IconContainer';

export const NavLink = ({ to, onNavigate, Icon, children }) => {
  return (
    <li>
      <Flex
        as="a"
        href={to}
        onClick={onNavigate}
        sx={{ fontSize: 4, px: 4, py: 3, alignItems: 'center' }}
      >
        <IconContainer>{Icon}</IconContainer>
        {children}
      </Flex>
    </li>
  );
};
