/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export const Target = ({ target }) => {
  return <div id={target} sx={{ scrollMarginTop: '50px' }} />;
};
