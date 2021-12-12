/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { AboutUs, Activities, Banner, Contact, Seo } from 'components';
import loadable from '@loadable/component';

// Check if window is defined. ScrollSpy component needs this check
const ScrollSpy = loadable(() => import('react-ui-scrollspy'));

const IndexPage = () => (
  <>
    <Seo title="Početna" />
    <ScrollSpy scrollThrottle={100}>
      <Banner />
      <AboutUs />
      <Activities />
      <Contact />
    </ScrollSpy>
  </>
);

export default IndexPage;
