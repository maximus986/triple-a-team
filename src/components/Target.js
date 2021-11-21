/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export const Target = ({ target }) => {
  return (
    <div
      id={target}
      sx={{ scrollMarginTop: ['10px', null, '30px', '20px', '30px', '50px'] }}
    />
  );
};
