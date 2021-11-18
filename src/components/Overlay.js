/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

export const Overlay = () => {
  return <Dim />;
};

const Dim = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -1;
`;
