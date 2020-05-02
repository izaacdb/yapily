import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const black = '#333333'
export const white = '#FFFFFF'
export const red = '#aa2424'
export const highlight = '#00bcd4'
export const pageWidth = '50rem'
export const rootFontSize = '16px'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    font-size: ${rootFontSize};
  }
  *{
    box-sizing: border-box;
  }
  body {
    background: ${black};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
