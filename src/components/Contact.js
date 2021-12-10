import { Box } from '@theme-ui/components';
import React from 'react';
import { Form } from './form/Form';
import { SectionContainer } from './SectionContainer';
import { ScrollTarget } from './ScrollTarget';

export const Contact = () => {
  return (
    <ScrollTarget target="contact">
      <SectionContainer sectionTitle="Kontakt">
        <Box sx={{ mx: [4, 0] }}>
          <Form />
        </Box>
      </SectionContainer>
    </ScrollTarget>
  );
};
