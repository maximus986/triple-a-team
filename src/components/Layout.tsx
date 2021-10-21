/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { jsx } from 'theme-ui';

const Layout: FunctionComponent = ({ children }) => (
  <div sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div
      sx={{
        width: '100%',
        background: 'green',
      }}
    >
      Header
    </div>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      {children}
    </main>
    <div
      sx={{
        width: '100%',
        background: 'purple',
      }}
    >
      Footer
    </div>
  </div>
);

export default Layout;
