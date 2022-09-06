import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { COLOR } from '../contstants';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export const MovieContainer = styled.ul`
    scroll-snap-align: start;
    min-width: 100%;
    padding: 0.5rem 0rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0rem;
    }
`;

export const Movie = styled.li`
  position: relative;
  border: 1px solid black;
  box-shadow: -4px -4px 0px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 2/3;
  width: 20%;
  text-align: center;
  color: ${COLOR.darkPurple};
  margin: 0rem 1rem;
  overflow: hidden;
  & * {
    transition-duration: 0.3s;
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
      width: 40%;
      transform: translateX(-40%);
      /* margin: 0.5rem 0rem; */
      margin-top: -2rem;
      &:nth-child(even) {
        transform: translateX(40%);
      }
  }
`;

export default function Movies() {
    const data = useStaticQuery(graphql`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "movies"}}}}}) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              gatsbyImage(placeholder: BLURRED, aspectRatio: 2.3, width: 400, height: 600, formats: WEBP)
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

  const movies = data.allWpPost.nodes.map((data, index) =>
    <Movie key={index}>
      <h5>{data.title}</h5>
      <GatsbyImage style={{minWidth: '100%', minHeight: '100%'}} objectFit='cover' image={data.featuredImage.node && getImage(data.featuredImage.node)} />
      <p>{data.tags.nodes[0].name}</p>
    </Movie>
  );

  return (
    <MovieContainer>
        {movies}
    </MovieContainer>
  );
}
