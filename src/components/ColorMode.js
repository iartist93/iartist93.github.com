/** @jsxImportSource theme-ui */

import React from 'react';
import { useColorMode } from 'theme-ui';
import theme from '../../styles/theme';

export default function ColorMode() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      sx={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
    >
      {colorMode === 'default' ? <span>🌙</span> : <span>☀️</span>}
    </button>
  );
}
