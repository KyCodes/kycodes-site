import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';
import maskHeader from '../images/mask-header.svg'
import background from '../images/back.webp'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 90vh;
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
    padding: 0px 8px;
    margin: 8px 0px;
    line-height: 2rem;
    text-shadow: 0px 0px 5px white;
  }
  & span {
    display: inline-block;
    font-weight: 800;
    color: #B48EAE;
    transition-duration: 0.2s;
    background-size: cover;
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


export default function Header() {
  return (
    <HeaderContainer>
      <TopAnchor id='top'/>
      <title>KyCodes</title>
      <meta name="description" content='KyCodes exceeds limits to build progressive and powerful web applications.' />
      <StaticImage width={300} loading='eager' placeholder='blurred' src='../images/kycodes-full.png' alt='KyCodes LLC logo'/>
      <h1>I'm <span>Kyler</span>, let's create <span>powerful web apps</span></h1>
      <RangeHeader />
    </HeaderContainer>
  )
}
