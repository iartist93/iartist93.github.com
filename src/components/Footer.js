/** @jsxImportSource theme-ui */

import '../../styles/theme';

export default function Footer() {
  return (
    <div sx={{ width: '100%', mt: 40, mb: 20 }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 18,
        }}
      >
        Built with{' '}
        <a
          href='https://nextjs.org/'
          sx={{
            textDecoration: 'none',
            color: 'primary',
            fontWeight: 500,
            mx: 1,
          }}
        >
          @Next.js
        </a>
        {'  '} {new Date().getFullYear()}
      </div>
    </div>
  );
}
