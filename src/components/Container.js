/** @jsx jsx */
import { Container as ThemeUiContainer, jsx } from 'theme-ui';

export const Container = ({ children }) => (
  <ThemeUiContainer
    sx={{
      maxWidth: ['100%', 'sm', 'md', 'lg', 'xl', 'xxl'],
    }}
  >
    {children}
  </ThemeUiContainer>
);
