import React from 'react';
import { Form } from './form/Form';
import { SectionContainer } from './SectionContainer';
import { Target } from './Target';

export const Contact = () => {
  return (
    <>
      <Target target="contact" />
      <SectionContainer sectionTitle="Kontakt">
        <Form />
      </SectionContainer>
    </>
  );
};
