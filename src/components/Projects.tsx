import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import maskProj from '../images/mask-proj.svg'
import { useStaticQuery, graphql } from "gatsby"
import { COLOR } from '../contstants';

export const ProjectsContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 32px 0px;
  display: flex;
  background: #B48EAE;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${COLOR.white};
  font-weight: 200;
  text-align: center;
  & h2 {
    border-color: ${COLOR.lightPurple};
    &::before {
      border-radius: 60% 40% 40% 60% / 50% 35% 65% 50%;
      border-color: ${COLOR.darkPurple};
    }
    &::after {
      border-color: ${COLOR.lightPurple};
    }
  }
`;

export const RangeProj = styled.div`
  position: absolute;
  top: calc(-10vw + 5px);
  mask-image: url(${maskProj});
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 10vw;
  background: #B48EAE;
`;


export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "projects"}}}}}) {
        nodes {
          title
          slug
          excerpt
          featuredImage {
            node {
              gatsbyImage(placeholder: BLURRED, aspectRatio: 16.10, width: 400, height: 225, formats: WEBP)
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
  
  const projects = data.allWpPost.nodes.map((data, index) =>
    <Card 
    title={data.title} 
    excerpt={data.excerpt}
    sourceUrl={data.featuredImage.node}
    tags={data.tags.nodes}
    href={`/${data.slug}`}
    key={index}/>
  );

  return (
    <ProjectsContainer>
      <RangeProj id='projects' />
      <h2>Projects</h2>
      {projects}
      <p>Additionally, this site is on a headless WordPress setup utilizing GatsbyJS and updated with webhooks!</p>
    </ProjectsContainer>
  )
}
