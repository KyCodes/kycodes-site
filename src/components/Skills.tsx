import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOR } from '../contstants';
import maskSkills from '../images/mask-skills.svg';

const blobMorph = keyframes`
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 80% 20% 50% 50% / 30% 60% 40% 70%;
  }
  50% {
    border-radius: 60% 40% 40% 60% / 50% 35% 65% 50%;
  }
  75% {
    border-radius: 35% 65% 60% 40% / 75% 50% 50% 25%;
  }
  100% {
    border-radius: 80% 20% 50% 50% / 50% 30% 70% 50%;
  }
`;

export const SkillsContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 16px 8vw;
    background: #B48EAE;
    z-index: 10;
      & h2 {
      border-color: ${COLOR.lightPurple};
      &::before {
        border-radius: 35% 65% 60% 40% / 75% 50% 50% 25%;
        border-color: ${COLOR.darkPurple};
      }
      &::after {
        border-color: ${COLOR.lightPurple};
      }
    }
`;

export const RangeSkills = styled.div`
  position: absolute;
  top: calc(-15vw + 5px);
  left: 0;
  mask-image: url(${maskSkills});
  mask-repeat: no-repeat;
  mask-size: cover;
  width: 100%;
  height: 15vw;
  background: #B48EAE;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 0rem;
  @media (max-width: 992px) {
      flex-direction: column;
      margin: 2rem 0rem;
  }
`;

export const Card = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 64px 64px 0px 64px;
  max-width: 400px;
  align-items: center;
  flex-direction: column;
  background: rgba(0,0,0,0.6);
  border: 2px solid black;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.4);
  margin: 0rem -0.5rem;
  animation: ${blobMorph} 25s ease-in-out infinite alternate;
  color: silver;
  text-align: center;
  z-index: 30;
  & h3 {
    font-size: 2.5rem;
    color: ${COLOR.white};
    font-family: "Indie Flower", cursive;
  }
  & p {
    font-weight: 200;
  }
  &:nth-of-type(2) {
    animation-duration: 15s;
    z-index: 20;
  }
  &:nth-of-type(3) {
    animation-duration: 20s;
    z-index: 10;
  }
  @media (max-width: 992px) {
      width: 100%;
      margin: -0.5rem -2rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

export const Tag = styled.p`
    border: 1px solid black;
    display: inline;
    cursor: default;
    padding: 4px 8px;
    margin: 4px;
    border-radius: 25px;
    font-size: 0.75rem;
    background-color: gainsboro;
    color: black;    
    font-weight: 500;
    white-space: nowrap;
`;


export default function Skills() {
  const [design, setDesign] = useState(Object)
  const [develop, setDevelop] = useState(Object)
  const [deploy, setDeploy] = useState(Object)

  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "skills"}}}}}) {
        nodes {
          slug
          content
          featuredImage {
            node {
              gatsbyImage(aspectRatio: 1.1, width: 200, height: 200, formats: WEBP, placeholder: BLURRED)
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

  useEffect(() => {
    for (let i = 0; i < data.allWpPost.nodes.length; i++) {
      const wpData = data.allWpPost.nodes[i];
      if (wpData.slug == 'design') {
        setDesign({content: wpData.content, tags: wpData.tags.nodes})
      } else if (wpData.slug == 'develop') {
        setDevelop({content: wpData.content, tags: wpData.tags.nodes})
      } else if (wpData.slug == 'deploy') {
        setDeploy({content: wpData.content, tags: wpData.tags.nodes})
      }
    }
  }, [data])

  const designTags = design.tags?.map((data: any, index: number) =>
      <Tag key={index}>{data.name}</Tag>
  );

  const developTags = develop.tags?.map((data: any, index: number) =>
      <Tag key={index}>{data.name}</Tag>
  );

  const deployTags = deploy.tags?.map((data: any, index: number) =>
      <Tag key={index}>{data.name}</Tag>
  );

  return (
    <SkillsContainer>
        <RangeSkills id="skills" />
        <h2>Skills</h2>
        <CardContainer>
          <Card>
              <h3>Design</h3>
              <p dangerouslySetInnerHTML={{__html: design.content}} />
              <TagContainer>{designTags}</TagContainer>
          </Card>
          <Card>
            <h3>Develop</h3>
            <p dangerouslySetInnerHTML={{__html: develop.content}} />
            <TagContainer>{developTags}</TagContainer>
          </Card>
          <Card>
            <h3>Deploy</h3>
            <p dangerouslySetInnerHTML={{__html: deploy.content}} />
            <TagContainer>{deployTags}</TagContainer>
          </Card>
        </CardContainer>
    </SkillsContainer>
  );
}
