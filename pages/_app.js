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
      <div sx={{ width: '100%', mt: 40, mb: 20 }}>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 20,
          }}
        >
          Built with{' '}
          <a
            href='https://nextjs.org/'
            sx={{
              textDecoration: 'none',
              color: 'primary',
              fontWeight: 600,
              mx: 1,
            }}
          >
            @Next.js
          </a>
          {'  '} ♥
        </div>
      </div>
    </ThemeProvider>
  );
}
