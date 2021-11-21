/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AboutUs, Activities, Banner, Contact, Seo } from 'components';

const IndexPage = () => (
  <div>
    <Seo title="3ATeam" />
    <Banner />
    <AboutUs />
    <Activities />
    <Contact />
  </div>
);

export default IndexPage;
