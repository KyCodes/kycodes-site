import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background-color: dimgray;
  border-top: 0.5px solid black;
  box-shadow: inset 0px 10px 20px rgba(0,0,0,0.5);
  z-index: 10;
`;


export default function Footer() {
  return (
    <FooterContainer>
    
    </FooterContainer>
  );
}
