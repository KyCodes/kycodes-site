import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import maskProj from '../images/mask-proj.svg'
import { useStaticQuery, graphql } from "gatsby"

export const ProjectsContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 32px 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
              sourceUrl
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
    sourceUrl={data.featuredImage.node.sourceUrl}
    tags={data.tags.nodes}
    href={`/${data.slug}`}
    key={index}/>
  );

  return (
    <ProjectsContainer>
      <RangeProj id='projects' />
      <h2>Projects</h2>
      {projects}
    </ProjectsContainer>
  )
}
