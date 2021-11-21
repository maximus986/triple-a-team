/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'components';

export const SectionContainer = ({
  sectionTitle,
  bg = 'primaryBackground',
  children,
}) => {
  return (
    <section sx={{ mt: [11, null, 9, 11], bg }}>
      <Container>
        <h2
          sx={{
            textAlign: 'center',
            mb: [7, null, null, null],
            px: [4, 0],
          }}
        >
          {sectionTitle}
        </h2>
        {children}
      </Container>
    </section>
  );
};
