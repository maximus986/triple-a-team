/** @jsx jsx */
import { Flex } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx } from 'theme-ui';
import { ContactInfoLinks } from './ContactInfoLinks';

export const MobileContactInfo = () => {
  const {
    contentfulContact: { phone, email, instagramLink },
  } = useStaticQuery(graphql`
    {
      contentfulContact {
        instagramLink
        email
        phone
      }
    }
  `);
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <div sx={{ pl: 4 }}>
        <ContactInfoLinks />
      </div>
    </Flex>
  );
};
