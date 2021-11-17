/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { jsx } from 'theme-ui';
import { ContactInfoLink } from './ContactInfoLink';

export const ContactInfoLinks = () => {
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
    <>
      <ContactInfoLinkContainer
        sx={{ mb: [3, null, 0], mr: [null, null, null, null, 3] }}
      >
        <ContactInfoLink to={`tel: ${phone}`} Icon={AiOutlinePhone}>
          {phone}
        </ContactInfoLink>
      </ContactInfoLinkContainer>
      <ContactInfoLinkContainer
        sx={{ mb: [3, null, 0], mr: [null, null, null, null, 3] }}
      >
        <ContactInfoLink to={`mailto:${email}`} Icon={AiOutlineMail}>
          {email}
        </ContactInfoLink>
      </ContactInfoLinkContainer>
      <ContactInfoLinkContainer>
        <ContactInfoLink to={instagramLink} Icon={AiOutlineInstagram}>
          Instagram
        </ContactInfoLink>
      </ContactInfoLinkContainer>
    </>
  );
};

const ContactInfoLinkContainer = styled.div``;
