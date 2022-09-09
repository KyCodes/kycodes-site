import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { COLOR } from '../contstants';

interface navProps {
  $collapse?: boolean;
}

export const LogoAnchor = styled.a`
  flex: 1;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const NavBar = styled.nav`
    z-index: 1000;
    height: 64px;
    background: rgba(255,255,255, 0.7);
    backdrop-filter: blur(5px);
    border-bottom: 2px solid #632A50;
    width: 100%;
    position: fixed;
    padding: 0rem 1rem;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & a {
      text-transform: uppercase;
      transition-duration: 0.3s;
      padding: 0rem 1rem;
      cursor: pointer;
      font-weight: 200;
      font-size: 1.5rem;
      color: #632A50;
      text-decoration: none;
    }
    & a:not(${LogoAnchor}):hover {
      transform: scale(1.1);
      text-shadow: 0px 0px 2px #632A50;
    }
`;

export const AnchorWrapper = styled.ul<navProps>`
  position: relative;
  display: flex;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  background-color: transparent;
  overflow: hidden;
  z-index: 1100;
  @media (max-width: 768px) {
    transform: ${props => props.$collapse ? 'translateX(1rem)' : 'translateX(calc(100% + 1rem))'};
    flex-direction: column;
    padding: 1rem 0rem;
    align-items: center;
    justify-content: space-evenly;
    top: 62px;
    border-left: 2px solid ${COLOR.darkPurple};
    border-bottom: 2px solid ${COLOR.darkPurple};
    border-bottom-left-radius: 3rem;
    background: rgba(255,255,255,0.9);
    position: fixed;
    width: 40%;
    a {
      width: 100%;
      padding: 1rem 0rem;
      text-align: center;
    }
  }
`;


export const HamburgerWrapper = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const Hamburger = styled.div<navProps>`
  position: relative;
  width: 25px;
  height: 5px;
  background: ${COLOR.darkPurple};
  &::before, ::after {
    content: '';
    transition-duration: 0.2s;
    width: 25px;
    height: 3px;
    background: ${COLOR.darkPurple};
  }
  &::before {
    position: absolute;
    top: ${props => props.$collapse ? '0px' : '-8px'};
  }
  &::after {
    position: absolute;
    bottom: ${props => props.$collapse ? '0px' : '-8px'};
  }
`;

export default function Nav(props: navProps) {
  const [ham, setHam] = useState(false)

  return (
    <NavBar>
        <LogoAnchor href='/#top'>
          <StaticImage formats={["webp"]} width={35} objectFit='cover' placeholder='blurred' src='../images/kycodes-short.webp' alt='KyCodes LLC icon logo'/>
        </LogoAnchor>
      <AnchorWrapper $collapse={ham}>
        <a onClick={() => setHam(false)} href='/#projects'>Projects</a>
        <a onClick={() => setHam(false)} href='/#bio'>Bio</a>
        <a onClick={() => setHam(false)} href='/#skills'>Skills</a>
        <a onClick={() => setHam(false)} href='/#contact'>Contact</a>
      </AnchorWrapper>
      <HamburgerWrapper onClick={() => setHam(!ham)}>
        <Hamburger $collapse={ham} />
      </HamburgerWrapper>
    </NavBar>
  )
}
