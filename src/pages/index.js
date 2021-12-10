/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { AboutUs, Activities, Banner, Contact, Seo } from 'components';
import ScrollSpy from 'react-ui-scrollspy';

const IndexPage = () => (
  <>
    <Seo title="3ATeam" />
    <ScrollSpy scrollThrottle={100}>
      <Banner />
      <AboutUs />
      <Activities />
      <Contact />
    </ScrollSpy>
  </>
);

export default IndexPage;
