import { createGlobalStyle } from 'styled-components';
import "@fontsource/mukta/200.css"
import "@fontsource/mukta/500.css"
import "@fontsource/mukta/800.css"
import "@fontsource/indie-flower"
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Mukta", sans-serif;
  }

  h2 {
    -webkit-text-stroke: 1px black;
    text-transform: uppercase;
    text-shadow: 2px 2px 0px #f7f7f7;
    color: transparent;
    font-size: 3.5rem;
  }

  html, 
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
      background: #B48EAE;
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
      overflow-x: hidden;
  }

  body {
      display: flex;
      flex-direction: column;
  }
`;
export default GlobalStyle;