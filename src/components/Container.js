/** @jsx jsx */
import { Container as ThemeUiContainer, jsx, useThemeUI } from 'theme-ui';

export const Container = ({ children }) => {
  const {
    theme: { sizes },
    theme,
  } = useThemeUI();

  console.log(theme);

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
