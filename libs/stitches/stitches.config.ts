import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      foreground: '#222222',
      background: '#ffffff',
    },
  },
  media: {
    bp1: '(max-width: 1200px)',
    bp2: '(max-width: 860px)',
    bp3: '(max-width: 640px)',
  },
  utils: {},
});
