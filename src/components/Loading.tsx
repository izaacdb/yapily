import styled, { css, keyframes } from 'styled-components'
import { white } from '../styles'

const ellipsis = keyframes`
  to {
    width: 1.25em;
  }
`

interface Props {
  animate: boolean
}

export const Loading = styled.div<Props>`
  min-height: 100vh;
  margin: 1rem 0;
  padding: 0 1rem;
  font-size: 1.5rem;
  color: ${white};
  ${(props: Props) =>
    props.animate &&
    css`
      &:after {
        overflow: hidden;
        display: inline-block;
        vertical-align: bottom;
        animation: ${ellipsis} steps(4, end) 900ms infinite;
        content: '\\2026';
        width: 0;
      }
    `}
`
