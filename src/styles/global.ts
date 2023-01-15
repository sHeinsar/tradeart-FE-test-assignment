// src/styles/global.ts
import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../assets/background-image.png'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  

  html {
    height: 100%;
    background: #2a094a url(${BackgroundImage}) no-repeat;
    background-position-x: 1380px;
    background-size: 1228px;
    
    body {
      height: 100%;
      margin: 0;
    }

    #root {
      height: 100%;
    }
  }
`

export default GlobalStyle
