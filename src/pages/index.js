/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AboutUs, Activities, Banner, Container, Seo } from 'components';

const IndexPage = () => (
  <div>
    <Seo title="3ATeam" />
    <Banner />
    <AboutUs />
    <Activities />
  </div>
);

export default IndexPage;
