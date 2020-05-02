import React, { FunctionComponent, useEffect, useState } from 'react'

import { connect } from 'react-redux'
import List, { Loading } from '../components/List'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import { MarvelResponse, Meta } from '../interfaces'
import { charactersRequestThunk } from '../state/actions'
import { getKey } from '../state/reducer'

import { RouteParams } from './Routes'

interface Props {
  charactersRequestThunk: typeof charactersRequestThunk
  characters: MarvelResponse
  page: number
  pending: boolean
  meta: Meta
}

export const count = 20

const filterCharacters = (characters: MarvelResponse, search: string): MarvelResponse => ({
  ...characters,
  data: characters.data.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())),
})

const Characters: FunctionComponent<Props> = ({ charactersRequestThunk, page, characters, pending, meta }) => {
  const [filteredCharacters, setFilteredCharacters] = useState(characters)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (characters?.data) {
      setFilteredCharacters(filterCharacters(characters, search))
    } else if (!pending) {
      charactersRequestThunk({ count, page })
    }
  }, [characters, search, pending, charactersRequestThunk, page])

  if (!filteredCharacters?.data || filteredCharacters?.data?.length === 0) {
    return (
      <>
        <Search setSearch={setSearch} />
        <Pagination page={page} meta={meta} />
        {search ? <Loading>No matching names</Loading> : <Loading>Loading...</Loading>}
      </>
    )
  }

  const { data } = filteredCharacters

  return (
    <>
      <Search setSearch={setSearch} />
      <Pagination page={page} meta={meta} />
      <List page={page} characters={data} />
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const page = parseInt((ownProps.match.params as RouteParams).page)
  const key = getKey({ count, page })
  const { [key]: characters, pending, meta } = state.requestReducer

  return {
    pending,
    page,
    characters,
    meta,
  }
}

const mapDispatchToProps = { charactersRequestThunk }

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
