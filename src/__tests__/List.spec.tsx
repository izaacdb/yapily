import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import List, { Props } from '../components/List'
import testData from '../test-data'

function renderList(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    characters: testData.data,
    page: 'k',
  }
  return render(
    <Router>
      <List {...defaultProps} {...props} />
    </Router>
  )
}

describe('<Header />', () => {
  let card
  let character
  let page = 'k'
  beforeEach(async () => {
    const { getByTestId } = renderList()
    card = await getByTestId('list--card')
    character = testData.data[0]
  })

  test('should render an image with a valid src', async () => {
    const {
      thumbnail: { path, extension },
    } = character
    const thumbnail = card.querySelector('img')
    expect(thumbnail).toBeInTheDocument()
    expect(thumbnail).toHaveAttribute('src', `${path}.${extension}`)
  })

  test('should render a valid name', async () => {
    const label = card.querySelector('p')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent(character.name)
  })

  test('should render an anchor with a valid link', async () => {
    const { id } = character
    const anchor = card.querySelector('a')
    expect(anchor).toHaveAttribute('href', `/characters/${page}/${id}`)
  })
})
