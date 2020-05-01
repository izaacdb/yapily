import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Meta } from '../interfaces'
import { highlight, white } from '../styles'

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
  border-bottom: 0.2rem solid ${white};
  padding: 0.2rem 0.2rem 0;
  margin-right: 1rem;
  &:hover {
    border-bottom: 0.2rem ${highlight} solid;
    color: ${highlight};
  }
  color: ${({ active }) => (active ? highlight : undefined)};
  border-bottom-color: ${({ active }) => (active ? highlight : undefined)};
`

interface Props {
  meta: Meta
  page: string
}

const Pagination: FunctionComponent<Props> = ({ meta, page }) => {
  const pages = meta ? [...Array(Math.ceil(meta.total / meta.limit))] : []

  return (
    <Wrapper>
      {pages.map((_, i) => {
        return (
          <StyledLink active={+page === i} to={`/characters/${i}`} key={i}>
            {i + 1}
          </StyledLink>
        )
      })}
    </Wrapper>
  )
}

export default Pagination
