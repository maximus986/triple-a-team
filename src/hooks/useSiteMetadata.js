import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const {
    site: {
      siteMetadata: { author, description, keywords, siteUrl, title },
    },
  } = useStaticQuery(
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
