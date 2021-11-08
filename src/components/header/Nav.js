/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';

export const Nav = () => {
  return (
    <Flex
      sx={{
        display: ['none', null, 'flex'],
        color: 'blue',
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      Ko smo mi Aktivnosti Kontakt
    </Flex>
  );
};
