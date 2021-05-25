/** @jsxImportSource theme-ui */

import React from 'react';
import '../styles/styles.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <div sx={{ variant: 'layout.pageBorder' }}></div>
    </ThemeProvider>
  );
}
