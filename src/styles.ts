import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const black = '#000000'
export const grey = '#333333'
export const white = '#FFFFFF'
export const teal = '#00bcd4'
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
    background: ${grey};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .masonry-grid {
    display: flex;
  }
  .masonry-grid_column {
    padding-left: 1rem;
    background-clip: padding-box;
  }
  
  /* Style your items */
  .masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 1rem;
  }
`
