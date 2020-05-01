import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const black = '#333333'
export const white = '#FFFFFF'
export const red = '#aa2424'
export const highlight = '#00bcd4'

export const GlobalStyles = createGlobalStyle`
  ${reset}
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
  // a{
  //   color: ${white};
  //   text-decoration: none;
  //   border-bottom:0.2rem solid ${white};
  //   padding: 0.2rem;
  //   margin-right: 1rem;
  //   &:hover{
  //   border-bottom: 0.2rem ${highlight} solid;
  //     color: ${highlight};
  //   }
  // }
`
