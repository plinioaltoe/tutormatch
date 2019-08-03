import { createGlobalStyle } from 'styled-components'
import colors from './colors'

// import 'rc-slider/assets/index.css'

// import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${colors.white};
    font-family: 'Avenir', sans-serif;
    color: ${colors.black}
  }

  button {
    cursor: pointer;
  }
`
export default GlobalStyle
