import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import maskBio from '../images/mask-bio.svg';
import { useStaticQuery, graphql } from "gatsby"

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
  & * {
    overflow: visible;
  }
  & img {
    top: -50%;
    position: absolute;
    border-radius: 50%;
    width: 200px;
    aspect-ratio: 1 / 1;
  }
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

export const MediaContainer = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
    query {
      allWpPost(filter: {slug: {eq: "bio"}}) {
        nodes {
          content
        }
      }
    }
  `)

  return (
    <BioContainer>
        <RangeBio id='bio' />
        <h2>Bio</h2>
        <BioCard>
          <StaticImage style={{position: 'absolute'}} imgStyle={{border: '5px solid dimgray', boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'}} placeholder='blurred' src='../images/bio.webp' alt='Photo of Kyler Fullerton with his girlfriend, Kylie, smiling.'/>
          <BioContent dangerouslySetInnerHTML={{__html: data.allWpPost.nodes[0].content}} />
          <MediaContainer>
            <details>
              <summary>Albums</summary>
              <p>mac miller</p>
            </details>
            <details>
              <summary>Movies</summary>
              <p>babadook</p>
            </details>
          </MediaContainer>
        </BioCard>
    </BioContainer>
  );
}
