import React, { FunctionComponent } from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Datum } from '../interfaces'
import { black, white } from '../styles'

const Wrapper = styled(Masonry)`
  min-height: 100vh;
  color: ${white};
  //columns: 6 10rem;
  //column-gap: 1rem;
  margin: 0 1rem 0 0;
  padding: 1rem 0;
`

const Card = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: transform;
  &:hover,
  &:focus,
  &:active {
    z-index: 1;
    transform: scale(1.15);
  }
`

const borders = `
  border-bottom: 0.3rem solid ${black};
  border-left: 0.3rem solid ${black};
  border-top: 0.1rem solid ${black};
  border-right: 0.1rem solid ${black};`

const Thumb = styled.img`
  width: 100%;
  ${borders}
`

const Label = styled.p`
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

interface Props {
  characters: Datum[]
  page: number
}

const breakpointCols = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const List: FunctionComponent<Props> = ({ characters, page }) => {
  return (
    <Wrapper breakpointCols={breakpointCols} className="masonry-grid" columnClassName="masonry-grid_column">
      {characters
        .map(({ id, name, thumbnail: { path, extension } }) => {
          if (path.includes('image_not_available')) {
            return null
          }
          return (
            <Link key={id} to={`/characters/${page}/${id}`}>
              <Card>
                <Thumb src={`${path}.${extension}`} alt={name} />
                <Label>{name}</Label>
              </Card>
            </Link>
          )
        })
        .filter((f) => f)}
    </Wrapper>
  )
}
export default List
