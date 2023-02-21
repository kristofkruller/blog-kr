"use client"

import { createGlobalStyle } from "styled-components";
import { Sora, Montserrat, Raleway } from "@next/font/google"

const sora = Sora({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

const GlobalStyles = createGlobalStyle`

  /* font-family: 'Montserrat', sans-serif;
  font-family: 'Raleway', sans-serif;
  font-family: 'Sora', sans-serif; */

  :root {
    --primary-color: #8347AE;
    --secondary-color: #FC89AC;
    --light: #E6E6E6;
    --dark: #160D1C;

    --transition-basic: all 245ms ease-in-out;

    --sora: ${sora.style.fontFamily}, sans-serif;
    --montserrat: ${montserrat.style.fontFamily}, sans-serif;
    --raleway: ${raleway.style.fontFamily}, sans-serif;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--sora);
    cursor: default;
  }

  html,
  body {
    overflow-x: hidden;
  }

  body {
    position: relative;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
 
  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
        font-family: var(--sora);
        font-weight: 300;
        letter-spacing: .3em;
        text-transform: uppercase;
        font-size: 5em;
        color: var(--dark);
        min-height: 160px;
        display: flex;
        align-items: center;
    }
    h2 {
        font-family: var(--montserrat);
        font-weight: 900;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--primary-color);
    }
`
export default GlobalStyles;