import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'html, body': {
    margin: 0,
    padding: 0,
    background: '$background',
    color: '$foreground',
    fontFamily: 'Inter, sans-serif',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
