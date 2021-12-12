/** @jsx jsx */
import React from 'react';
import { Info, Seo } from 'components';
import { ImNotification } from 'react-icons/im';
import { jsx } from 'theme-ui';

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Stranica ne postoji" />
      <Info>
        <ImNotification sx={{ color: 'primary' }} size={60} />
        <h2 sx={{ my: 5, fontSize: [null, null, null, null, null, 11] }}>
          Nažalost, zahtevana stranica ne postoji.
        </h2>
        <p sx={{ mb: 5, fontSize: [null, null, null, null, null, 6] }}>
          Možete se vratiti na početnu stranicu.
        </p>
      </Info>
    </>
  );
};

export default NotFoundPage;
