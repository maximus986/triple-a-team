import { useStaticQuery, graphql } from 'gatsby';
import { SiteSiteMetadata } from '../../graphql-types';

type SiteMetadata = SiteSiteMetadata;

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
