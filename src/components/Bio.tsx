import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import maskBio from '../images/mask-bio.svg';
import background from '../images/back.webp'
import { useStaticQuery, graphql } from "gatsby"
import { COLOR } from '../contstants';
import Albums from './Albums';
import Movies from './Movies';
import Shows from './Shows';

interface bioProps {
  $select?: boolean;
}

export const BioContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 15vw 8vw 20vw 8vw;
    padding-top: max(15vw, 64px);
    background: #632A50;
    & h2 {
    border-color: ${COLOR.darkPurple};
    &::before {
      border-radius: 80% 20% 50% 50% / 50% 30% 70% 50%;
      border-color: ${COLOR.lightPurple};
    }
    &::after {
      border-color: ${COLOR.darkPurple};
    }
  }
`;

export const BioCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  align-items: center;
  width: 100%;
  padding: 0px 16px;
  background-image: url(${background});
  margin: 100px 0rem 1rem 0rem;
  border: 2px solid black;
  box-shadow: -8px -8px 0px rgba(0,0,0,0.5);
`;

export const BioContent = styled.span`
  z-index: 10;
  width: 100%;
  height: 100%;
  padding-top: calc(125px + 1rem);
  font-weight: 200;
  font-size: 1.25rem;
  text-align: center;
  text-shadow: 0px 0px 3px white;
  & strong {
    color: #632A50;
  }
`
export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button<bioProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  flex: 1;
  height: 50px;
  background: #632A50;
  color: ${COLOR.white};
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  transition-duration: 0.2s;
  &:nth-of-type(2) {
    margin: 0.5rem 1rem;
  }
  &:hover {
      box-shadow: -4px -4px 0px ${COLOR.lightPurple};
      transform: translateX(4px) translateY(4px);
  }
  &:active {
    transform: translateX(0px) translateY(0px);
    box-shadow: none;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 95px;
  background: dimgray;
  color: ${COLOR.white};
  border: 1px solid black;
  text-transform: uppercase;
  font-weight: 800;
  z-index: 30;
  border-radius: 6px;
  & a {
    color: inherit;
    text-decoration: none;
    padding: 4px 16px;
    &:hover {
      text-decoration: underline;
    }
  }
  & p {
    cursor: default;
    opacity: 0.4;
  }
`

export const Carousel = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 24px 0px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
      padding-top: 3rem;
  }
`;

export const RangeBio = styled.div`
  position: absolute;
  top: -5px;
  mask-image: url(${maskBio});
  transform: rotate(180deg);
  mask-repeat: no-repeat;
  mask-size: cover;
  z-index: 10;
  width: 100%;
  height: 15vw;
  background: #B48EAE;
`;


export default function Bio() {
  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {slug: {eq: "bio"}}) {
        nodes {
          content
          featuredImage {
            node {
              altText
              gatsbyImage(aspectRatio: 1.1, width: 200, height: 200, formats: WEBP, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  function scrollNav(category: string) {
    const carousel = document.querySelector('#carousel')
    if (carousel) {
      if (category == 'albums') {
        carousel.scrollLeft = 0;
      }
      if (category == 'movies') {
        carousel.scrollLeft = carousel.clientWidth;
      }
      if (category == 'shows') {
        carousel.scrollLeft = (carousel.clientWidth * 2);
      }
    }
  }

  return (
    <BioContainer>
      <RangeBio id='bio' />
      <h2>Bio</h2>
      <BioCard>
        <LinkContainer>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/KyCodes'>CV</a>
          <p>|</p>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/KyCodes'>Git</a>
        </LinkContainer>
        <GatsbyImage
          style={{
            position: 'absolute',
            overflow: 'hidden',
            top: '-75px',
            borderRadius: '50%',
            border: `1px solid black`,
            boxShadow: '-4px -4px 0px rgba(0,0,0,0.5)',
          }}
          imgStyle={{
            borderRadius: '50%',
          }} image={data.allWpPost.nodes[0].featuredImage.node && getImage(data.allWpPost.nodes[0].featuredImage.node)} alt={data.allWpPost.nodes[0].featuredImage.node.altText} />
        <BioContent dangerouslySetInnerHTML={{ __html: data.allWpPost.nodes[0].content }} />
        <BtnContainer>
          <Btn onMouseDown={() => scrollNav('albums')}>Albums</Btn>
          <Btn onMouseDown={() => scrollNav('movies')}>Movies</Btn>
          <Btn onMouseDown={() => scrollNav('shows')}>Shows</Btn>
        </BtnContainer>
        <Carousel id='carousel'>
          <Albums />
          <Movies />
          <Shows />
        </Carousel>
      </BioCard>
    </BioContainer>
  );
}
