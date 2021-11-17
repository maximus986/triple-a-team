/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';

export const IconContainer = ({ children, style }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: ['30px', null, null, '50px', '30px'],
        height: ['25px', null, null, '50px', '30px'],
        mr: [3, null, 3, null, 1],
        ...style,
      }}
    >
      {children}
    </Flex>
  );
};
