/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Container as ThemeUiContainer, jsx, useThemeUI } from 'theme-ui';

export const Container: FunctionComponent = ({ children }) => {
  const {
    theme: { sizes },
  } = useThemeUI();

  return (
    <ThemeUiContainer
      sx={{
        maxWidth: ['100%', ...Object.keys(sizes ?? {})],
      }}
    >
      {children}
    </ThemeUiContainer>
  );
};
