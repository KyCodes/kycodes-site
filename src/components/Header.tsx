import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import styled, { keyframes } from 'styled-components';
import maskHeader from '../images/mask-header.svg'
import background from '../images/back.webp'
import { COLOR } from '../contstants';
import { motion } from 'framer-motion'
import SEO from './SEO';

const blink = keyframes`
  to { opacity: 0; }
`;

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  min-height: 90vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: repeat;
  & h1 {
    color: #632A50;
    font-weight: 200;
    text-align: center;
    padding: 0px 32px;
    margin: 8px 0px;
    line-height: 2rem;
    text-shadow: 0px 0px 5px white;
  }
  & strong {
    font-weight: 800;
    color: #B48EAE;
  }
`;

export const RangeHeader = styled.div`
  position: absolute;
  bottom: 0px;
  mask-image: url(${maskHeader});
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 15vw;
  background: #632A50;
`;

export const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`

export const Blink = styled.span`
  animation: ${blink} 1s infinite;
  margin: 0rem 4px;
  color: ${COLOR.darkPurple};
`

export default function Header() {
  return (
    <HeaderContainer>
      <TopAnchor id='top'/>
      <SEO title='Home'/>
      <StaticImage formats={["webp"]} width={300} loading='eager' placeholder='blurred' src='../images/kycodes-full.png' alt='KyCodes LLC full-size logo'/>
      <motion.h1
      initial={{opacity: 0, y: 24}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      >I'm <strong>Kyler</strong>, let's create <strong>powerful web apps</strong><Blink>|</Blink></motion.h1>
      <RangeHeader />
    </HeaderContainer>
  )
}
