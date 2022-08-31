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
  position: relative;
  margin: 1rem 0rem;
  @media (max-width: 768px) {
      flex-direction: column;
      margin: 3rem 0rem;
  }
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: center; */
  padding: 32px;
  align-items: center;
  max-width: 500px;
  flex-direction: column;
  background: rgba(255,255,255,0.75);
  border: 1px solid black;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);
  min-height: 300px;
  margin: 0rem -1rem;
  animation: ${blobMorph} 25s ease-in-out infinite alternate;
  color: ${COLOR.darkGray};
  text-align: center;
  & h3 {
    font-size: 2.5rem;
    color: transparent;
    -webkit-text-stroke: 1px black;
    text-shadow: 2px 2px 0px ${COLOR.lightPurple};
  }
  &:nth-of-type(2) {
    animation-duration: 15s;
    background: rgba(0, 0, 0, 0.5);
    color: ${COLOR.white};
  }
  &:nth-of-type(3) {
    animation-duration: 20s;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: -1rem 0rem;
  }
`;


export default function Skills() {
  const [design, setDesign] = useState('')
  const [develop, setDevelop] = useState('')
  const [deploy, setDeploy] = useState('')

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
        }
      }
    }
  `)

  useEffect(() => {
    for (let i = 0; i < data.allWpPost.nodes.length; i++) {
      if (data.allWpPost.nodes[i].slug == 'design') {
        setDesign(data.allWpPost.nodes[i].content)
      } else if (data.allWpPost.nodes[i].slug == 'develop') {
        setDevelop(data.allWpPost.nodes[i].content)
      } else if (data.allWpPost.nodes[i].slug == 'deploy') {
        setDeploy(data.allWpPost.nodes[i].content)
      }
    }    
  }, [data])

  return (
    <SkillsContainer>
        <RangeSkills id="skills" />
        <h2>Skills</h2>
        <CardContainer>
          <Card>
            <h3>Design</h3>
            <p dangerouslySetInnerHTML={{__html: design}} />
          </Card>
          <Card>
            <h3>Develop</h3>
            <p dangerouslySetInnerHTML={{__html: develop}} />
          </Card>
          <Card>
            <h3>Deploy</h3>
            <p dangerouslySetInnerHTML={{__html: deploy}} />
          </Card>
        </CardContainer>
    </SkillsContainer>
  );
}
