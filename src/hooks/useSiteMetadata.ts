import { useStaticQuery, graphql } from 'gatsby';

// TODO: Check what is wrong with GatsbyTypes namespace (possible redo of code gen implementation?)
// eslint-disable-next-line no-undef
type SiteMetadata = GatsbyTypes.SiteSiteMetadata;

interface Site {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export const useSiteMetadata = (): SiteMetadata => {
  const {
    site: {
      siteMetadata: { author, description, keywords, siteUrl, title },
    },
  } = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            keywords
            siteUrl
            title
          }
        }
      }
    `,
  );
  return { author, description, keywords, siteUrl, title };
};
