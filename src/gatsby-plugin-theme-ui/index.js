export default {
  initialColorModeName: 'light',
  useBodyStyles: true,
  colors: {
    textPassive: '#666',
    primary: '#113F00',
    secondary: '#F8FFE6',
    tertiary: '#004452',
    textPrimary: '#0c0d24',
    primaryPassive: '#f1f1e6',
    primaryBackground: '#fff',
    secondaryBackground: '#fff',
    secondaryBackgroundActive: '#17181b',
    muted: '#e9e9e9',
    primaryOpacity_07: 'rgba(17, 63, 0, 0.7)',
    alert: '#FF4963',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
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
    secondary: {
      bg: 'primary',
      color: 'white',
      fontWeight: 'bold',
      width: '170px',
      height: '55px',
      transition: 'button',
      '&:hover': {
        bg: 'tertiary',
      },
    },
    primarySmall: {
      color: 'primaryBackground',
      bg: 'primary',
      width: '150px',
      height: '43px',
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
    outlineLarge: {
      bg: 'transparent',
      width: '260px',
      height: '60px',
      color: 'primaryBackground',
      fontWeight: 'bold',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'primaryBackground',
      textTransform: 'uppercase',
      transition: 'button',
      '&:hover': {
        borderColor: 'primary',
        bg: 'primary',
      },
    },
    outlineRegular: {
      bg: 'transparent',
      width: '190px',
      height: '55px',
      color: 'primary',
      fontWeight: 'normal',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'muted',
      textTransform: 'capitalize',
      transition: 'button',
      '&:hover': {
        borderColor: 'primary',
        bg: 'primary',
        color: 'primaryBackground',
      },
    },
    outlineSmall: {
      bg: 'transparent',
      width: '127px',
      height: '40px',
      color: 'textPrimary',
      fontWeight: 'normal',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'muted',
      textTransform: 'capitalize',
      transition: 'button',
      '&:hover': {
        borderColor: 'primary',
        bg: 'primary',
        color: 'primaryBackground',
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
      color: 'textPrimary',
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
    heading3: {
      variant: 'text.heading',
      fontSize: [7, 8], // 36, 40
      mb: 3, // 8
    },
    heading4: {
      variant: 'text.heading',
      fontSize: 5, // 24
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
      fontSize: 2,
      color: 'textPassive',
      bg: 'primaryBackground',
      lineHeight: 'body',
      scrollBehavior: 'smooth',

      '&::-webkit-scrollbar': {
        width: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      '&::-webkit-scrollbar-thumb': {
        bg: 'primary',
      },
      m: 0,
      overflowX: 'hidden', // Prevent horizontal scroll created in announcement section
      h1: {
        variant: 'text.heading1',
      },
      h2: {
        variant: 'text.heading2',
      },
      h3: {
        variant: 'text.heading3',
      },
      h4: {
        variant: 'text.heading4',
      },
      h5: {
        variant: 'text.heading4',
      },
      h6: {
        variant: 'text.heading4',
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
      hr: {
        height: '1px',
        width: '100%',
        maxWidth: '400px',
      },
    },
  },
  radii: {
    reset: 0,
    image: 10,
    navLink: 16,
  },
  transition: {
    button: '0.5s ease',
    imageLink: '0.4s ease',
    link: '0.3s ease',
    imageLinkLong: '1s ease',
  },
};
