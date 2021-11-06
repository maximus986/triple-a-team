/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AboutUs, Activities, Banner, Container, Seo } from 'components';

const IndexPage = () => (
  <div>
    <Seo title="pocetna" />
    <Container>
      <h1 sx={{ color: 'primary' }}>Triple A team</h1>
      <Banner />
      <AboutUs />
      <Activities />
    </Container>
  </div>
);

export default IndexPage;
