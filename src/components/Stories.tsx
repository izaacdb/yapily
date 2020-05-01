import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
`

const List = styled.ul``
const Item = styled.li``

const Stories = ({ title, items }) => {
  return (
    <>
      <Heading>Events</Heading>
      <List>
        {items.map((item) => (
          <Item key={item.name}>{item.name}</Item>
        ))}
      </List>
    </>
  )
}

export default Stories
