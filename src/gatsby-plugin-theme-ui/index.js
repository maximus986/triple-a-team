import { bootstrap } from '@theme-ui/preset-bootstrap';

export default {
  ...bootstrap,
  styles: {
    ...bootstrap.styles,
  },
  breakpoints: [...bootstrap.breakpoints, '1400px'],
  sizes: { ...bootstrap.sizes, xxl: 1320 },
};
