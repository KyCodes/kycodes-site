import React from 'react';
import styled from 'styled-components';
import maskSkills from '../images/mask-skills.svg';

export const SkillsContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50vh;
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


export default function Skills() {
  return (
    <SkillsContainer>
        <RangeSkills id="skills" />
        <h2>Skills</h2>
    </SkillsContainer>
  );
}
