/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Footer } from './Footer';
import { Header } from './header/Header';

const Layout = ({ children }) => (
  <div sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        pt: ['62px', null, 0],
        pb: [11, null, 9, 11],
      }}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
