import { Box } from '@theme-ui/components';
import React from 'react';
import { Form } from './form/Form';
import { SectionContainer } from './SectionContainer';
import { Target } from './Target';

export const Contact = () => {
  return (
    <div id="contact">
      <SectionContainer sectionTitle="Kontakt">
        <Box sx={{ mx: [4, 0] }}>
          <Form />
        </Box>
      </SectionContainer>
    </div>
  );
};
