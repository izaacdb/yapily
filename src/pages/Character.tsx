import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Loading } from '../components/List'
import Stories from '../components/Stories'
import { Datum, MarvelResponse } from '../interfaces'
import { charactersRequestThunk } from '../state/actions'
import { getKey } from '../state/reducer'

import { highlight, pageWidth, white } from '../styles'
import { count } from './Characters'
import { RouteParams } from './Routes'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem;
  max-width: ${pageWidth};
  min-height: 100vh;
  color: ${white};
`

const Name = styled.h1`
  margin: 1rem 0;
  font-size: 2.5rem;
`
const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`

const Back = styled.a`
  display: inline-block;
  margin: 1rem 0 0;
  color: ${white};
  text-decoration: underline;
  border-bottom: 0.2rem solid ${white};
  padding: 0;
  &:hover {
    color: ${highlight};
    border-bottom: 0.2rem solid ${highlight};
  }
`

const Picture = styled.img`
  width: 100%;
  max-height: ${pageWidth};
  margin: 0 auto;
`

interface Props {
  character: Datum
  history: { goBack: () => void }
}

const Character: FunctionComponent<Props> = ({ character, history }) => {
  if (!character) {
    history.goBack()
    return <Loading>Loading...</Loading>
  }
  const {
    thumbnail: { path, extension },
    name,
    description,
    stories: { items: storyItems },
    series: { items: seriesItems },
    events: { items: eventItems },
  } = character

  return (
    <Wrapper>
      <Picture src={`${path}.${extension}`} alt={name} />
      <Name>{name}</Name>
      <Description>
        {description ? description : 'No description available, probably some sort of xman or spider.'}
      </Description>
      {storyItems?.length > 0 && <Stories title="Comic books" items={storyItems} />}
      {seriesItems?.length > 0 && <Stories title="Television series" items={seriesItems} />}
      {eventItems?.length > 0 && <Stories title="Events" items={eventItems} />}
      <Back href="#" onClick={() => history.goBack()}>
        Back
      </Back>
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt((ownProps.match.params as RouteParams).id)
  const page = parseInt((ownProps.match.params as RouteParams).page)
  const key = getKey({ count, page })
  const { [key]: characters } = state.requestReducer
  if (characters) {
    const character = (characters as MarvelResponse).data.find((character) => character.id === id)
    return { character }
  } else {
    return {
      character: undefined,
    }
  }
}

const mapDispatchToProps = { charactersRequestThunk }

export default connect(mapStateToProps, mapDispatchToProps)(Character)
