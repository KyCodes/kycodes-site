import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { COLOR } from '../contstants';

interface navProps {
  $collapse?: boolean;
}

export const NavBar = styled.nav`
    z-index: 1000;
    height: 64px;
    background: rgba(255,255,255, 0.5);
    backdrop-filter: blur(5px);
    width: 100%;
    position: fixed;
    padding: 0rem 1rem;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 0.5px solid #632A50;
    & a:first-of-type {
      position: relative;
      margin-right: auto;
      overflow: hidden;
    }
    & a {
      text-transform: uppercase;
      transition-duration: 0.3s;
      padding: 0rem 1rem;
      cursor: pointer;
      font-weight: 200;
      font-size: 1.5rem;
      color: #632A50;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & a:hover {
      transform: scale(1.1);
      text-shadow: 0px 0px 2px #632A50;
    }
    & img {
      height: 40px;
    }
`;

export const AnchorWrapper = styled.ul<navProps>`
  display: flex;
  backdrop-filter: blur(5px);
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  background-color: transparent;
  backdrop-filter: blur(0px);
  @media (max-width: 768px) {
    transform: ${props => props.$collapse ? 'translateX(1rem)' : 'translateX(100%)'};
    flex-direction: column;
    padding: 1rem 0rem;
    align-items: center;
    justify-content: space-evenly;
    backdrop-filter: blur(5px) !important;
    top: 64px;
    background: linear-gradient(270deg, rgba(255,255,255,0.9) 80%, rgba(103,76,11,0) 100%);
    position: fixed;
    width: 50%;
    height: 300px;
    a {
      margin: auto;
      height: auto;
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
      <a href='/'>
        <StaticImage objectFit='contain' placeholder='blurred' src='../images/kycodes-short.webp' alt='KyCodes LLC icon'/>
      </a>
      <AnchorWrapper $collapse={ham}>
        <a href='/#projects'>Projects</a>
        <a href='/#bio'>Bio</a>
        <a href='/#skills'>Skills</a>
        <a href='/#contact'>Contact</a>
      </AnchorWrapper>
      <HamburgerWrapper onClick={() => setHam(!ham)}>
        <Hamburger $collapse={ham} />
      </HamburgerWrapper>
    </NavBar>
  )
}
