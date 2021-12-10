/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export const ScrollTarget = ({ target, children }) => {
  return (
    <div
      id={target}
      sx={{ scrollMarginTop: ['70px', null, '70px', '80px', '100px', '100px'] }}
    >
      {children}
    </div>
  );
};
