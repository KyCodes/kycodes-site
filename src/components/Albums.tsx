import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { COLOR } from '../contstants';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const AlbumContainer = styled.ul`
    scroll-snap-align: start;
    min-width: 100%;
    padding: 0.5rem 0rem;
    display: flex;
    min-height: 100%;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0rem;
    }
`;

export const Album = styled.li`
  position: relative;
  filter: drop-shadow(5px 5px 0px rgba(0,0,0,0.5));
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  text-align: center;
  color: ${COLOR.darkPurple};
  margin: 0rem 1rem;
  transform: translateY(-10%);
  overflow: hidden;
  &:nth-child(even) {
    transform: translateY(10%);
  }
  & * {
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }
  & h5, p {
    width: 100%;
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    opacity: 0;
    position: absolute;
    padding: 0px 8px;
    z-index: 10;
  }
  & h5 {
    transform: translateY(-100%);
    font-size: 1.25rem;
    top: 0;
    text-align: left;
    font-weight: 800;
  }
  & p {
    transform: translateY(100%);
    bottom: 0;
    font-weight: 200;
    text-align: right;
  }
  &:hover h5 {
    transform: translateY(0%);
    opacity: 1;
  }
  &:hover p {
    transform: translateY(0%);
    opacity: 1;
  }
  &:hover {
    z-index: 20;
  }
  @media (max-width: 768px) {
      width: 50%;
      transform: translateX(-40%) translateY(0%);
      &:nth-child(even) {
        transform: translateX(40%);
      }
  }
`;


export default function Albums() {
    const data = useStaticQuery(graphql`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "albums"}}}}}) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              gatsbyImage(placeholder: BLURRED, aspectRatio: 1.1, width: 400, height: 400, formats: WEBP)
            }
          }
          tags {
            nodes {
              link
              name
            }
          }
        }
      }
    }
  `)

  const albums = data.allWpPost.nodes.map((data, index) =>
    <Album key={index}>
      <h5>{data.title}</h5>
      <GatsbyImage objectFit='cover' loading='lazy' image={data.featuredImage.node && getImage(data.featuredImage.node)} />
      <p>{data.tags.nodes[0].name}</p>
    </Album>
  );

  return (
    <AlbumContainer>
        {albums}
    </AlbumContainer>
  );
}
