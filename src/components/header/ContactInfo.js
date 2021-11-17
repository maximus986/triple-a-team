/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ContactInfoLinks } from './ContactInfoLinks';

export const ContactInfo = () => {
  return (
    <div
      sx={{
        display: ['none', null, 'flex'],
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <ContactInfoLinks />
    </div>
  );
};
