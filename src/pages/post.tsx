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
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Footer from '../components/Footer';

export const HeaderContainer = styled.header`
  position: relative;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(5px);
  width: 100%;
  z-index: 10;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    color: transparent;
    -webkit-text-stroke: 1px black;
    font-size: 4rem;
    text-align: center;
    padding: 1rem;
    text-shadow: 2px 2px 0px ${COLOR.white};
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
  background: ${COLOR.darkPurple};
`;

export const RangeBack = styled.div`
  position: absolute;
  bottom: 0px;
  mask-image: url(${maskHeader});
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 15vw;
  filter: drop-shadow(0px 0px 5px black);
  background: ${COLOR.lightPurple};
`;

export const PostContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 12vw;
  background: ${COLOR.darkPurple};
`

export const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`

export const Content = styled.p`
  font-weight: 200;
  color: ${COLOR.white};
  font-size: 1.25rem;
  & p {
    margin-bottom: 16px;
  }
`

export const Summary = styled.div`
  display: flex;
  box-shadow: 8px 8px 0px rgba(0,0,0,0.5);
  border-radius: 15px 225px 15px 255px/255px 15px 225px 15px;
  border: 2px solid black;
  color: ${COLOR.white};
  position: relative;
  z-index: 20;
  background: dimgray;
  & p {
    font-weight: 200;
  }
  & span {
    font-size: 2rem;
    font-weight: 800;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 768px) {
    max-height: 200px;
  }
`

export const SummaryBlock = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  &:not(:last-of-type) {
    border-right: 1px dashed black;
  }
  @media (max-width: 768px) {
    &:not(:last-of-type) {
      border-right: none;
      border-bottom: 1px dashed black;
    }
  }
`

export const TagContainer = styled.div`
  z-index: 30;
  margin-top: -1rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 40vw;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const Tag = styled.p`
  border: 1px solid black;
  display: inline;
  cursor: default;
  box-shadow: 4px 4px 0px rgba(0,0,0,0.5);
  padding: 4px 8px;
  margin: 4px;
  border-radius: 25px;
  font-size: 0.75rem;
  background-color: gainsboro;
  color: black;    
  font-weight: 500;
  white-space: nowrap;
`;

export default function PostTemplate({ pageContext }) {
  function readingTime() {
    const words = pageContext.content?.split(' ').length;
    const wpm = 200;
    return Math.ceil(words / wpm)
  }

  const tags = pageContext.tags?.map((data: any, index: number) =>
    <Tag key={index}>{data.name}</Tag>
  );

  return (
    <>
        <GlobalStyle />
        <Nav />
        <TopAnchor id='top'/>
        <SEO title={pageContext.title} />
        <GatsbyImage alt={pageContext.imgAlt} style={{height: '110%', width: '110%', position: 'fixed', top: '-5%', left: '-5%', zIndex: 0, display: 'block'}} objectFit='cover' image={pageContext.imgSrc && getImage(pageContext.imgSrc)} />
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
            <Summary>
              <SummaryBlock>
                <p>Initial</p>
                <span>{pageContext.date}</span>
              </SummaryBlock>
              <SummaryBlock>
                <p>Updated</p>
                <span>{pageContext.modified}</span>
              </SummaryBlock>
              <SummaryBlock>
                <p>Duration</p>
                <span>{readingTime()} min</span>
              </SummaryBlock>
            </Summary>
            <TagContainer>
              {tags}
            </TagContainer>
          <Content dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </PostContainer>
        <Footer />
    </>
  );
}
