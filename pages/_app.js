/** @jsxImportSource theme-ui */

import '../styles/styles.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';
import Footer from '../src/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <div sx={{ variant: 'layout.pageBorder' }}></div>
      <Footer />
    </ThemeProvider>
  );
}
