/** @jsx jsx */
import styled from '@emotion/styled';
import { Flex } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { jsx, useThemeUI } from 'theme-ui';
import { IconContainer } from './IconContainer';

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
  console.log(phone, email, instagramLink);
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <div sx={{ pl: 4 }}>
        <ContactInfoLinkContainer sx={{ mb: 3 }}>
          <ContactInfoLink to={`tel: ${phone}`} Icon={<AiOutlinePhone />}>
            {phone}
          </ContactInfoLink>
        </ContactInfoLinkContainer>
        <ContactInfoLinkContainer sx={{ mb: 3 }}>
          <ContactInfoLink to={`mailto:${email}`} Icon={<AiOutlineMail />}>
            {email}
          </ContactInfoLink>
        </ContactInfoLinkContainer>
        <ContactInfoLinkContainer>
          <ContactInfoLink to={instagramLink} Icon={<AiOutlineInstagram />}>
            Instagram
          </ContactInfoLink>
        </ContactInfoLinkContainer>
      </div>
    </Flex>
  );
};

const ContactInfoLink = ({ Icon, to, children }) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <IconContainer sx={{ mr: 3, fontSize: 1 }}>{Icon}</IconContainer>
      <a
        href={to}
        sx={{
          borderBottom: `1px solid red`,
          pb: 0,
          fontSize: 0,
        }}
      >
        {children}
      </a>
    </Flex>
  );
};

const ContactInfoLinkContainer = styled.div``;
