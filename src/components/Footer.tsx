import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../contstants';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: dimgray;
  padding: 32px 4vw;
  border-top: 0.5px solid black;
  box-shadow: inset 0px 10px 20px rgba(0,0,0,0.5);
  z-index: 10;
  font-weight: 200;
  color: ${COLOR.white};
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 33%);
  & a {
    color: ${COLOR.white};
  }
  & p {
    font-weight: 500;
  }
`;

export const Nav = styled.ul`
  grid-column: 1;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Socials = styled.ul`
  grid-column: 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Credit = styled.section`
  grid-column: 1 / 3;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Nav>
        <p>Navigation</p>
        <a href='/#projects'>Projects</a>
        <a href='/#bio'>Bio</a>
        <a href='/#skills'>Skills</a>
        <a href='/#contact'>Contact</a>
      </Nav>
      <Socials>
        <p>Resources</p>
        <a target="_blank" rel="noopener noreferrer" href='https://www.greengeeks.com/'>GreenGeeks</a>
        <a target="_blank" rel="noopener noreferrer" href='https://developer.mozilla.org/en-US/'>MDN</a>
        <a target="_blank" rel="noopener noreferrer" href='https://wordpress.org/'>WordPress</a>
        <a target="_blank" rel="noopener noreferrer" href='https://www.nimh.nih.gov/health/find-help'>Mental Health</a>
      </Socials>
      <Credit>
        <a href='/'>Back to top</a>
        <p>{`KyCodes LLC (${new Date().getFullYear()})`}</p>
      </Credit>
    </FooterContainer>
  );
}
