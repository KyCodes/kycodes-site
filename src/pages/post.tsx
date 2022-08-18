import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles';
import maskProj from '../images/mask-proj.svg'
import maskHeader from '../images/mask-header.svg'
import background from '../images/back.webp'
import { COLOR } from '../contstants';
import { motion } from 'framer-motion'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 70vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: repeat;
  & h1 {
    color: #632A50;
    font-size: 4rem;
    text-align: center;
    padding: 0px 8px;
    margin: 8px 0px;
    line-height: 2rem;
    text-shadow: 0px 0px 5px white;
    font-family: "ZCOOL QingKe HuangYou", cursive;
  }
`;

export const RangeFront = styled.div`
  position: absolute;
  bottom: 0px;
  mask-image: url(${maskProj});
  z-index: 10;
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 10vw;
  background: #B48EAE;
`;

export const RangeBack = styled.div`
  position: absolute;
  bottom: 0px;
  mask-image: url(${maskHeader});
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 15vw;
  background: #632A50;
`;

export const Content = styled.span`
  z-index: 10;
  width: 10%;
  font-weight: 200;
  font-size: 1.25rem;
  color: ${COLOR.white};
  & strong {
    color: #632A50;
  }
  & * {
    padding: 0px 8vw;
  }
`

export default function PostTemplate({ pageContext }) {
    console.log(pageContext.tags)
  return (
    <>
        <GlobalStyle />
        <Nav />
        <HeaderContainer>
            <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            >{pageContext.title}</motion.h1>
            <RangeFront />
            <RangeBack />
        </HeaderContainer>
        <Content dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </>
  );
}
