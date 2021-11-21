export default {
  initialColorModeName: 'light',
  useBodyStyles: true,
  colors: {
    primary: '#113F00',
    secondary: '#F8FFE6',
    text: '#4C5356',
    textStrong: '#0c0d24',
    primaryPassive: '#f1f1e6',
    primaryBackground: '#fff',
    secondaryBackground: '#202D0B',
    muted: '#e9e9e9',
    primaryOpacity_07: 'rgba(17, 63, 0, 0.7)',
    alert: '#BF0001',
    modes: {
      dark: {
        primary: '#113F00',
        secondary: '#F8FFE6',
        text: '#4C5356',
        textStrong: '#0c0d24',
        primaryPassive: '#f1f1e6',
        primaryBackground: '#fff',
        secondaryBackground: '#202D0B',
        muted: '#e9e9e9',
        primaryOpacity_07: 'rgba(17, 63, 0, 0.7)',
        alert: '#BF0001',
      },
    },
  },
  sizes: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    xxl: 1320,
  },
  buttons: {
    primary: {
      color: 'primaryBackground',
      fontWeight: 'bold',
      bg: 'primary',
      width: '220px',
      height: '55px',
      boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2)`,
      position: 'relative',
      transition: 'button',
      borderRadius: 'default',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
  },
  fonts: {
    body: 'Josefin Sans, sans-serif',
    heading: 'Amatic SC, cursive',
  },
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px'],
  space: [
    0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
    136, 144, 152, 200,
  ],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 60, 90],
  fontWeights: {
    body: 300,
    normal: 400,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    reset: 0,
    body: 1.6,
    heading: 1.3,
    normal: 1,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      color: 'textStrong',
      fontWeight: 'bold',
      lineHeight: 'heading',
      m: 0,
    },
    heading1: {
      variant: 'text.heading',
      fontSize: [12, null, null, null, 13], // 36, 40
      color: 'primaryBackground',
      lineHeight: ['heading', 'normal', null, null, null, 'heading'],
      mb: 3, // 8
    },
    heading2: {
      variant: 'text.heading',
      fontSize: [8, 9], // 36, 40
      mb: 1, // 8
    },
    paragraph: { m: 0, fontWeight: 'normal' },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: 2,
      color: 'text',
      bg: 'primaryBackground',
      lineHeight: 'body',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': {
        width: '4px',
        backgroundColor: 'primaryOpacity_07',
      },
      '&::-webkit-scrollbar-thumb': {
        bg: 'primary',
      },
      m: 0,
      h1: {
        variant: 'text.heading1',
      },
      h2: {
        variant: 'text.heading2',
      },
      p: {
        variant: 'text.paragraph',
      },
      li: {
        variant: 'text.listItem',
      },
      a: {
        variant: 'text.link',
      },
      ul: { listStyle: 'none', p: 0 },
      figure: { m: 0 },
    },
  },
  radii: {
    reset: 0,
    default: 16,
  },
  transitions: {
    button: '0.5s ease',
    default: '0.3s ease',
  },
};
