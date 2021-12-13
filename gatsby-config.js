require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://tripleateam.org',
    title: '3ATeam',
    description:
      '3ATeam je grupa ljudi koji su postali prijatelji, u svojim lutanjima i istraživanjima. Specijalinosti su nam team building-zi, aktivni odmor, uključujući planinarenje, vožnju biciklom, kajak i ture u zemlji i inostranstvu.',
    keywords:
      'Aktivni odmor, planinarenje, kajak, vožnja bicikla, adrenalin, avantura, priroda, team building',
    author: 'Aleksandar Maksimovic<aleksandar.maksimovic2608@gmail.com',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://tripleateam.org`,
        sitemap: `https://tripleateam.org/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // Layout component must be default exported
        component: `${__dirname}/src/components/Layout.js`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Amatic SC:300,400,400i,700`, `Josefin Sans:300,400,400i,700`],
        display: 'swap',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
