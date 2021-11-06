export default {
  initialColorModeName: 'light',
  useBodyStyles: true,
  colors: {
    text: '#6E7A6C',
    primary: '#023508',
    secondary: '#D1EBE3',
    primaryBackground: '#fff',
    alert: '#BF0001',
    modes: {
      dark: {
        text: '#6E7A6C',
        primary: '#023508',
        secondary: '#D1EBE3',
        primaryBackground: '#fff',
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
      boxShadow: `0 15px 15px rgba(0, 103, 119, 0.2)`,
      position: 'relative',
      transition: 'button',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },

    button: {
      display: 'inline-block',
      color: 'muted',
      transition: 'button',
      '&:hover': {
        color: 'primary',
      },
    },
  },
  fonts: {
    body: 'Ubuntu, sans-serif',
    heading: 'Ubuntu, sans-serif',
  },
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px'],
  space: [
    0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128,
    136, 144, 152, 200,
  ],
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3.5rem',
    '4.5rem',
    '5.5rem',
    '6rem',
  ],
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
      color: 'textPrimary',
      fontWeight: 'bold',
      lineHeight: 'heading',
      m: 0,
    },
    heading1: {
      variant: 'text.heading',
      fontSize: 11,
      color: 'primaryBackground',
      lineHeight: ['heading', 'normal', null, null, null, 'heading'],
      mb: 3, // 8
    },
    heading2: {
      variant: 'text.heading',
      fontSize: [8, 9], // 36, 40
      mb: 1, // 8
    },

    paragraph: { m: 0 },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'normal',
      fontSize: ['14px', '16px'],
      color: 'text',
      bg: 'primaryBackground',
      lineHeight: 'body',
      '&::-webkit-scrollbar': {
        width: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
      a: {
        variant: 'text.link',
      },
      figure: { m: 0 },
    },
  },
  radii: {
    reset: 0,
    image: 10,
    locationPopup: 14,
  },
  transition: {
    button: '0.5s ease',
    imageLink: '0.4s ease',
    link: '0.3s ease',
    imageLinkLong: '1s ease',
  },
};
