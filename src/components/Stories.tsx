import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Item } from '../interfaces'

const Heading = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 1.5rem 0 1rem;
`

const List = styled.ul``
const Story = styled.li`
  line-height: 1.2;
`

interface Props {
  title: string
  items: Item[]
}

const Stories: FunctionComponent<Props> = ({ title, items }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <List>
        {items.map((item, i) => (
          <Story key={item.name + i}>{item.name}</Story>
        ))}
      </List>
    </>
  )
}

export default Stories
