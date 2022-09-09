import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles';
import maskProj from '../images/mask-proj.svg'
import maskHeader from '../images/mask-header.svg'
import background from '../images/back.webp'
import { COLOR } from '../contstants';
import { motion } from 'framer-motion'
import SEO from '../components/SEO';

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
    color: transparent;
    -webkit-text-stroke: 1px black;
    font-size: 4rem;
    text-align: center;
    padding: 0px 8px;
    margin: 8px 0px;
    text-shadow: 2px 2px 0px #632A50;
  }
`;

export const RangeFront = styled.div`
  position: absolute;
  bottom: -5px;
  mask-image: url(${maskProj});
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 10vw;
  z-index: 10;
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

export const PostContainer = styled.main`
  width: 100%;
`

export const Content = styled.p`

`

export const Summary = styled.div`

`

export default function PostTemplate({ pageContext }) {
  console.log(pageContext)
  return (
    <>
        <GlobalStyle />
        <Nav />
        <SEO title={pageContext.title} />
        <HeaderContainer>
            <motion.h1
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            >{pageContext.title}</motion.h1>
            <RangeFront />
            <RangeBack />
        </HeaderContainer>
        <PostContainer>
          <Content dangerouslySetInnerHTML={{__html: pageContext.content}} />
          <Summary></Summary>
        </PostContainer>
    </>
  );
}
