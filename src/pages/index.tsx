import { PageProps } from 'gatsby';
import React from 'react';
import { Site } from '../Site';

const IndexPage = (props: PageProps) => {
  return (
    <>
      <h1>Gatsby Starter Template</h1>
      <Site />
    </>
  );
};

export default IndexPage;
