import React, { FunctionComponent, useState } from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { Character } from '../interfaces'
import { black, white } from '../styles'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Wrapper = styled(Masonry)`
  min-height: 100vh;
  color: ${white};
  margin: 0 1rem 0 0;
  padding: 1rem 0;
`

const Card = styled.div`
  display: inline-block;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  ${({ loaded }) =>
    loaded &&
    css`
      animation: ${fadeIn} 0.3s linear;
    `};
  transition: all 0.3s linear;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  &:hover,
  &:focus,
  &:active {
    z-index: 1;
    transform: scale(1.15);
  }
`

const Thumb = styled.img`
  border-bottom: 0.3rem solid ${black};
  border-left: 0.3rem solid ${black};
  border-top: 0.1rem solid ${black};
  border-right: 0.1rem solid ${black};
  width: 100%;
`

const Label = styled.p`
  opacity: inherit;
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  color: ${white};
  font-weight: bold;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
`

const StyledLink = styled(Link)`
  width: 100%;
`

interface Props {
  characters: Character[]
  page: string
}

const breakpointCols = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const List: FunctionComponent<Props> = ({ characters, page }) => {
  const [loaded, setLoaded] = useState(characters.map((c) => false))
  // const loadedCount = loaded.reduce((acc, l) => (l ? (acc += 1) : acc), 0)

  return (
    <Wrapper breakpointCols={breakpointCols} className="masonry-grid" columnClassName="masonry-grid_column">
      {characters.map(({ id, name, thumbnail: { path, extension } }, i) => {
        return (
          <Card loaded={loaded[i] ? 1 : 0} key={id}>
            <StyledLink to={`/characters/${page}/${id}`}>
              <Thumb
                onLoad={() => {
                  setLoaded([...loaded.slice(0, i), true, ...loaded.slice(i + 1)])
                }}
                src={`${path}.${extension}`}
                alt={name}
              />
              <Label>{name}</Label>
            </StyledLink>
          </Card>
        )
      })}
    </Wrapper>
  )
}
export default List
