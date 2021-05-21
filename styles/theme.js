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
      backgroundColor: 'background',
      justifyContent: 'center',
      alignItems: 'center',
      width: '44%',
      margin: '0 auto',
      pt: 30,
    },
  },
  styles: {
    ...system.styles,
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Open Sans", "Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
    text: '"Merriweather", sans',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    bg1: 'rgb(255, 229, 226)',
    bg2: '#FfF7F8',
    bg3: 'rgb(246, 247, 248)',
    bglight1: '#f8fafe',
    btn1: '#C9F0B6',
    btn2: 'rgb(182, 201, 240)',
  },
  lineHeights: {
    ...system.lineHeights,
    tight: 1.25,
  },
};

console.log(theme);
export default theme;
