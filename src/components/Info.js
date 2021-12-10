/** @jsx jsx */
import { Container, Button } from 'components';
import { jsx, Flex } from 'theme-ui';

export const Info = ({ children }) => {
  return (
    <div
      sx={{
        mt: [null, null, '124px', '135px'],
        flex: 1,
      }}
    >
      <section
        sx={{
          px: [4, null, 5, 7, 8],
          py: [8],
        }}
      >
        <Container>
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {children}
            <Button variant="primary" to="/">
              Početna
            </Button>
          </Flex>
        </Container>
      </section>
    </div>
  );
};
