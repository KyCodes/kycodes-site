import { createGlobalStyle } from 'styled-components';
import "@fontsource/mukta/200.css"
import "@fontsource/mukta/500.css"
import "@fontsource/mukta/800.css"
import "@fontsource/indie-flower"
import { COLOR } from './contstants';
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Mukta", sans-serif;
  }

  h2 {
    position: relative;
    -webkit-text-stroke: 1px black;
    text-shadow: 2px 2px 0px #f7f7f7;
    color: transparent;
    text-align: center;
    width: 300px;
    padding: 16px;
    font-size: 3.5rem;
    border-radius: 80% 20% 50% 50% / 50% 30% 70% 50%;
    border: 6px solid black;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      border: 3px solid white;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 60% 40% 40% 60% / 50% 35% 65% 50%;
      border: 6px solid black;
    }
  }

  html, 
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
      background: #B48EAE;
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
      display: flex;
      flex-direction: column;
  }
`;
export default GlobalStyle;