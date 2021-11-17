/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import { NavItems } from './NavItems';

export const Nav = () => {
  return (
    <Flex
      sx={{
        display: ['none', null, 'flex'],
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      {/* TODO: ry to use useNavigation */}
      <NavItems onNavigate={() => null} />
    </Flex>
  );
};
