import React, { FunctionComponent, useEffect, useState } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { highlight, pageWidth, white } from '../styles'
import { RouteParams } from '../components/Routes'
import { getCharacter } from '../api'
import { Loading } from '../components/List'
import { MarvelResponse } from '../interfaces'
import Stories from '../components/Stories'

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

const Wrapper = styled.div`
  max-width: ${pageWidth};
  min-height: 100vh;
  color: ${white};
  padding: 1rem 0;
  margin: 0 auto;
`

const Picture = styled.img`
  width: 100%;
  max-height: ${pageWidth};
  margin: 0 auto;
`

interface Props {
  page: string
  history: { goBack: () => void }
}

const Character: FunctionComponent<Props> = ({ page, history }) => {
  const { id } = useParams<RouteParams>()
  const [response, setResponse] = useState<MarvelResponse>(undefined)

  useEffect(() => {
    getCharacter(id).then(setResponse)
  }, [id])

  if (!response) {
    return <Loading>Loading...</Loading>
  }
  console.log(response.data[0])
  const {
    thumbnail: { path, extension },
    name,
    description,
    stories: { items: storyItems },
    series: { items: seriesItems },
    events: { items: eventItems },
  } = response.data[0]

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

// @ts-ignore
export default withRouter(Character)
