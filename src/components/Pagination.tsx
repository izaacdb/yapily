import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Meta } from '../interfaces'
import { teal, white } from '../styles'

const Wrapper = styled.ul`
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
`

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${white};
  text-decoration: none;
  border-bottom: 0.3rem solid ${white};
  padding: 0.2rem 0.2rem 0;
  margin-right: 1rem;
  &:hover {
    border-bottom: 0.3rem ${teal} solid;
    color: ${teal};
  }
  color: ${({ active }) => (active ? teal : undefined)};
  border-bottom-color: ${({ active }) => (active ? teal : undefined)};
`

interface Props {
  meta: Meta
  page: number
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

const Pagination: FunctionComponent<Props> = ({ meta, page }) => {
  return (
    <Wrapper>
      {pages.map((_, i) => {
        return (
          <StyledLink disabled={!meta} active={+page === i ? 1 : 0} to={`/characters/${i}`} key={i}>
            {i + 1}
          </StyledLink>
        )
      })}
    </Wrapper>
  )
}

export default Pagination
