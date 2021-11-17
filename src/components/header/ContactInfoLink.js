/** @jsx jsx */
import { Flex } from '@theme-ui/components';
import { jsx } from 'theme-ui';
import { IconContainer } from './IconContainer';

export const ContactInfoLink = ({ Icon, to, children }) => {
  return (
    <Flex
      as="a"
      href={to}
      sx={{
        pb: 0,
        fontSize: 1,
        alignItems: 'center',
        transition: '0.3s ease',
        '&:hover': {
          color: 'primary',
        },
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconContainer>
        <Icon sx={{ fontSize: [1, null, 5, 7, 4] }} />
      </IconContainer>
      <span
        sx={{
          display: [null, null, 'none', null, 'inline-block'],
          mt: 1,
          border: [null, null, null, 'none'],
          borderWidth: '1px',
          borderBottomStyle: 'solid',
          borderColor: 'primary',
        }}
      >
        {children}
      </span>
    </Flex>
  );
};
