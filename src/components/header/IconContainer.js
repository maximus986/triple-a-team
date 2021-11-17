/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';

export const IconContainer = ({ children }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '25px',
        mr: 3,
      }}
    >
      {children}
    </Flex>
  );
};
