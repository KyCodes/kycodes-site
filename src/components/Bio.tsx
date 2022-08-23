import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';
import maskBio from '../images/mask-bio.svg';
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
`;

export const BioCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px;
  background: darkgray;
  margin: 100px 0rem 1rem 0rem;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  /* & img {
    top: -50%;
    position: absolute;
    border-radius: 50%;
    width: 200px;
    aspect-ratio: 1 / 1;
  }
  & img:nth-of-type(2) {
    border: 5px solid dimgray;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    z-index: 20;
  } */
`;

export const BioContent = styled.span`
  z-index: 10;
  width: 100%;
  height: 100%;
  padding-top: 125px;
  font-weight: 200;
  font-size: 1.25rem;
  text-align: center;
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
  flex: 1;
  height: 50px;
  color: ${props => props.$select ? '#B48EAE' : '#632A50'};
  background: ${props => props.$select ? '#632A50' : '#B48EAE'};
  padding: 4px 8px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  margin: 0.5rem 0rem;
  transition-duration: 0.2s;
  &:nth-of-type(2) {
    margin: 0.5rem 1rem;
  }
  &:hover {
      box-shadow: 3px 3px 0px ${COLOR.darkPurple};
      box-shadow: ${props => props.$select ? '3px 3px 0px #B48EAE' : '3px 3px 0px #632A50'};
      transform: translateX(-3px) translateY(-3px);
  }
`;


export const Carousel = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
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
  const [albums, setAlbums] = useState(true)
  const [movies, setMovies] = useState(false)
  const [shows, setShows] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {slug: {eq: "bio"}}) {
        nodes {
          content
          featuredImage {
            node {
              gatsbyImage(aspectRatio: 1.1, width: 200, height: 200, formats: WEBP, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  function scrollNav(category: string) {
    const carousel = document.querySelector('#carousel')
    if (category == 'albums') {
      carousel.scrollLeft = 0;
      setAlbums(true)
      setMovies(false)
      setShows(false)
    }
    if (category == 'movies') {
      carousel.scrollLeft = carousel.clientWidth;
      setAlbums(false)
      setMovies(true)
      setShows(false)
    }
    if (category == 'shows') {
      carousel.scrollLeft = (carousel.clientWidth * 2);
      setAlbums(false)
      setMovies(false)
      setShows(true)
    }
  }
  console.log(data.allWpPost.nodes[0].featuredImage)

  return (
    <BioContainer>
        <RangeBio id='bio' />
        <h2>Bio</h2>
        <BioCard>
          <GatsbyImage 
          style={{
            position: 'absolute', 
            overflow: 'hidden',
            top: '-75px',
            borderRadius: '50%',
            border: '6px solid dimgray'
          }} 
          imgStyle={{
            borderRadius: '50%',
          }} image={data.allWpPost.nodes[0].featuredImage.node && getImage(data.allWpPost.nodes[0].featuredImage.node)} alt='Photo of Kyler Fullerton with his girlfriend, Kylie, smiling.'/>
          <BioContent dangerouslySetInnerHTML={{__html: data.allWpPost.nodes[0].content}} />
          <BtnContainer>
            <Btn $select={albums} onMouseDown={() => scrollNav('albums')}>Albums</Btn>
            <Btn $select={movies} onMouseDown={() => scrollNav('movies')}>Movies</Btn>
            <Btn $select={shows} onMouseDown={() => scrollNav('shows')}>Shows</Btn>
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
