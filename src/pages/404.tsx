import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import GlobalStyle from '../styles'
import styled from 'styled-components';
import background from '../images/back.webp'
import { COLOR } from '../contstants';
import { motion } from 'framer-motion'
import SEO from '../components/SEO';

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: repeat;
  & h1 {
    color: transparent;
    -webkit-text-stroke: 1px black;
    font-size: 4rem;
    text-align: center;
    padding: 0px 8px;
    margin: 8px 0px;
    text-shadow: 2px 2px 0px #632A50;
  }
  & h3 {
    font-size: 2rem;
    color: ${COLOR.darkPurple};
    font-weight: 200;
    text-align: center;
    line-height: 2rem;
    text-shadow: 0px 0px 5px white;
    padding: 0px 32px;
    border: none;
    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
    & a {
      color: ${COLOR.lightPurple};
      font-weight: 800;
    }
  }
`;

export default function Page404() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <SEO title='404' />
      <HeaderContainer>
        <motion.h1
        initial={{opacity: 0, y: 24}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        >404</motion.h1>
        <motion.h3
        initial={{opacity: 0, y: 24}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        >You look lost...<a href='/#top'>click here to get back!</a></motion.h3>
      </HeaderContainer>
      <Footer />
    </>
  )
}
