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
  buttons: {
    filterShared: {
      width: '80px',
      height: '35px',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      color: 'gray500',
      fontSize: 1,
      textAlign: 'center',
      p: 10,
    },
    filter: {
      variant: 'buttons.filterShared',
    },
    filterActive: {
      variant: 'buttons.filterShared',
      backgroundColor: 'button2',
      fontWeight: 'heading',
      borderRadius: 6,
      color: 'black',
      boxShadow: (theme) => `2px 2px 5px 0px ${theme.colors.shadow}`,
      ':hover': {
        backgroundColor: 'heighlight2',
      },
      ':active': {
        backgroundColor: 'active2',
      },
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
      p: [20, 20, 10],
      pt: [10, 30, 60],
      // backgroundColor: 'red',
    },
    pageBorder: {
      border: '8px solid black',
      borderColor: 'border',
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
      backgroundColor: 'bgblue300',
      outline: 'none',
      width: 75,
      height: 35,
      border: 'none',
      color: 'black300',
      fontWeight: 'heading',
      borderRadius: 8,
      cursor: 'pointer',
      boxShadow: (theme) => `-2px 2px 5px 0px ${theme.colors.shadow}`,
      ':hover': {
        backgroundColor: 'heighlight',
      },
      ':active': {
        backgroundColor: 'active',
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
  initiaColorModeName: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    border: '#b6c9f0',
    bgblue100: '#f8fafe', //cards, resume bg
    bgblue200: '#fafcff',
    bgblue300: '#c5d4f3', // buttons
    button2: '#dfe1e5',
    black300: '#373c48', // button text
    black400: '#5c6166',
    gray500: '#999FAC',
    red100: '#FFDEDA',
    shadow: '#e9eaed',
    heighlight: '#ccd9f5',
    heighlight2: '#e2e4e8',
    active: '#a4b5d8',
    active2: '#c9cbce',
    modes: {
      dark: {
        text: '#E6F6F7',
        // background: '#252d53',
        background: '#2A1855',
        primary: '#0cf',
        bgblue100: '#374049',
        bgblue200: '#323a42',
        bgblue300: '#5b6578',
        black300: '#E2FCFF',
        black400: '#758392',
        shadow: '#293249',
        red100: '#E2FCFF',
        heighlight: '#6b7486',
        active: '#525b6c',
        button2: '#C3C7CE',
        heighlight2: '#c9cdd3',
        active2: '#b0b3b9',
        gray500: '#a3a9b4',
      },
    },
    // blue1: '#6930c3',
    // bg1: 'rgb(255, 229, 226)',
    // bg2: '#FfF7F8',
    // bg3: 'rgb(246, 247, 248)',
    // bg4: '#f0f4fc',
    // btn1: '#C9F0B6',
    // btn2: 'rgb(182, 201, 240)',
    // darkblue1: '#b7c2cc',
    // darkblue2: '#899199',
  },
  lineHeights: {
    ...system.lineHeights,
    tight: 1.25,
  },
};

// console.log(theme);

export default theme;
