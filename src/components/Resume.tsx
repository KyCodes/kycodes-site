import React from 'react'
import styled from 'styled-components';

export const ResumeContainer = styled.div`
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Doc = styled.div`
    width: 2480px;
    min-height: 3508px;
    border: 5px solid black;
    background: red;
    scale: -20vw;
`;

export default function Resume() {
  return (
    <ResumeContainer>
        <Doc>
        </Doc>
    </ResumeContainer>
  )
}
