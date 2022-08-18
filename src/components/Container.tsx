import React from 'react';
import styled from 'styled-components';

interface containerProps {
    children: any;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export default function componentName(props: containerProps) {
  return (
    <Container>
        {props.children}
    </Container>
  );
}
