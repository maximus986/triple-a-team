/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Header } from './header/Header';

const Layout = ({ children }) => (
  <div sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        pt: ['62px', null, 0],
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
