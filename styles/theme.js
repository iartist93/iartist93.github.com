import { system } from '@theme-ui/presets';

const theme = {
  ...system,
  avatars: {
    social: {
      width: 35,
      mr: 12,
    },
    tools: {
      width: 25,
    },
  },
  layout: {
    page: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'transperent',
      justifyContent: 'center',
      alignItems: 'center',
      width: ['100%', '100%', '660px'],
      margin: '0 auto',
      p: 10,
      pt: 30,
    },
    pageBorder: {
      border: '8px solid rgb(182, 201, 240)',
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      // zIndex: -1,
      pointerEvents: 'none',
    },
    resumeSection: {
      display: 'flex',
      flexDirection: ['column', 'row'],
      alignItems: ['flex-start', 'center'],
      justifyContent: ['flex-start', 'space-between'],
      ml: [2, 3],
    },
    contentTitle: {
      fontWeight: 'section',
      fontSize: [1, 2],
      mt: [0, 3],
      mb: 1,
      order: [2, 1],
    },
    contentText: {
      fontSize: [1, 2],
      m: 0,
      ml: [0, 4],
    },
    primaryButton: {
      backgroundColor: '#b6c9f0',
      outline: 'none',
      width: 75,
      height: 35,
      border: 'none',
      color: 'rgb(33, 9, 78)',
      fontWeight: 'heading',
      borderRadius: 10,
      boxShadow: '-2px 2px 5px 0px rgba(230,230,230,1)',
      ':hover': {
        backgroundColor: '#ccd9f5',
      },
      ':active': {
        backgroundColor: '#a4b5d8',
      },
    },
  },
  styles: {
    ...system.styles,
  },
  fonts: {
    ...system.fonts,
    body: 'system-ui, sans-serif',
    heading: '"Open Sans", "Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
    text: '"Merriweather", sans',
  },
  fontWeights: {
    ...system.fontWeights,
    section: 500,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    border: 'rgb(182, 201, 240)',
    bg1: 'rgb(255, 229, 226)',
    bg2: '#FfF7F8',
    bg3: 'rgb(246, 247, 248)',
    bg4: '#f0f4fc',
    bglight1: '#f8fafe',
    btn1: '#C9F0B6',
    btn2: 'rgb(182, 201, 240)',
    blue1: '#6930c3',
    lightblue1: '#e5f2ff',
    lightblue3: '#fafcff',
    darkblue1: '#b7c2cc',
    darkblue2: '#899199',
    darkblue3: '#5c6166',
  },
  lineHeights: {
    ...system.lineHeights,
    tight: 1.25,
  },
};

console.log(theme);

export default theme;
