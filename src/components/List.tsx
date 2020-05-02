import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { highlight, white } from '../styles'
import { Datum } from '../interfaces'

export const Loading = styled.div`
  min-height: 100vh;
  margin: 1rem 0;
  padding: 0 1rem;
  font-size: 2rem;
  color: ${white};
`
const Wrapper = styled.ul`
  min-height: 100vh;
  color: ${white};
  columns: 6 10rem;
  column-gap: 1rem;
  margin: 0 1rem;
  padding: 1rem 0;
`
const Thumb = styled.img`
  width: 100%;
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

const Card = styled.div`
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
    transform: scale(1.1);
  }
`

interface Props {
  characters: Datum[]
}

const List: FunctionComponent<Props> = ({ characters }) => {
  if (!characters) {
    return <Loading>Loading...</Loading>
  }
  return (
    <Wrapper>
      {characters.map(({ thumbnail: { path, extension }, name, id }) => (
        <Link key={id} to={`/character/${id}`}>
          <Card className="hvr-underline-from-left" style={{ position: 'relative' }}>
            <Thumb src={`${path}.${extension}`} alt={name} />
            <Label>{name}</Label>
          </Card>
        </Link>
      ))}
    </Wrapper>
  )
}

export default List
