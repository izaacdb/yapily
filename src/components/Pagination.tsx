import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Meta } from '../interfaces'
import { teal, white } from '../styles'

const Wrapper = styled.ul`
  margin: 0 0 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${white};
  text-decoration: none;
  border-bottom: 0.3rem solid ${white};
  width: 1.5rem;
  text-align: center;
  height: 2rem;
  margin: 0 1rem 1rem 0;
  &:hover {
    border-bottom: 0.3rem ${teal} solid;
    color: ${teal};
  }
  color: ${({ active }) => (active ? teal : undefined)};
  border-bottom-color: ${({ active }) => (active ? teal : undefined)};
`

interface Props {
  meta: Meta
  page: string
}

const pages = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const Pagination: FunctionComponent<Props> = ({ page }) => {
  return (
    <Wrapper>
      {pages.map((pg, i) => {
        return (
          <StyledLink active={page === pg ? 1 : 0} to={`/characters/${pg}`} key={i}>
            {pg}
          </StyledLink>
        )
      })}
    </Wrapper>
  )
}

export default Pagination
