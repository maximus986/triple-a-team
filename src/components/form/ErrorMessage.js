/** @jsx jsx */
import { jsx, Paragraph } from 'theme-ui';

export const ErrorMessage = ({ children }) => {
  return (
    <Paragraph
      sx={{ fontSize: 1, fontWeight: 'bold', color: 'alert', mt: 1, ml: 4 }}
    >
      {children}
    </Paragraph>
  );
};
