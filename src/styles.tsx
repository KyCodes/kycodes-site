import { createGlobalStyle } from 'styled-components';
import "@fontsource/mukta/200.css"
import "@fontsource/mukta/500.css"
import "@fontsource/mukta/800.css"
import "@fontsource/gloria-hallelujah"
import "@fontsource/zcool-qingke-huangyou"
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Mukta", sans-serif;
  }

  h2 {
    font-family: "ZCOOL QingKe HuangYou", cursive;
    text-transform: uppercase;
    font-size: 3.5rem;
    color: #f7f7f7;
  }

  html, 
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
      background: #B48EAE;
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
  }

  body {
      display: flex;
      flex-direction: column;
  }
`;
export default GlobalStyle;