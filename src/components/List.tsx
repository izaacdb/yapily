import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { white } from '../styles'
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
  columns: 6 200px;
  column-gap: 1rem;
  margin: 0 1rem;
  padding: 1rem 0;
`
const Thumb = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`

const Label = styled.p`
  font-size: 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${white};
  font-weight: bold;
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
          <div style={{ position: 'relative' }}>
            <Thumb src={`${path}.${extension}`} alt={name} />
            <Label>{name}</Label>
          </div>
        </Link>
      ))}
    </Wrapper>
  )
}

export default List
