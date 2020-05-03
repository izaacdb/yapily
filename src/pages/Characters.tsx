import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import List from '../components/List'
import { Loading } from '../components/Loading'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import { MarvelResponse, RouteParams } from '../interfaces'
import { charactersRequestThunk } from '../state/actions'
import { getKey } from '../state/reducer'

interface Props {
  charactersRequestThunk: typeof charactersRequestThunk
  characters: MarvelResponse
  page: string
  pending: boolean
}

export const count = 100

const filterCharacters = (characters: MarvelResponse, search: string): MarvelResponse => ({
  ...characters,
  data: characters.data.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())),
})

const Characters: FunctionComponent<Props> = ({ charactersRequestThunk, page, characters, pending }) => {
  const [filteredCharacters, setFilteredCharacters] = useState(characters)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (characters?.data) {
      setFilteredCharacters(filterCharacters(characters, search))
    } else if (!pending) {
      charactersRequestThunk({ count, page })
    }
  }, [characters, search, pending, charactersRequestThunk, page])

  if (pending || !filteredCharacters?.data) {
    return (
      <>
        <Search setSearch={setSearch} />
        <Pagination page={page} />
        <Loading animate>Loading characters</Loading>
      </>
    )
  }

  if (filteredCharacters?.data?.length === 0) {
    return (
      <>
        <Search setSearch={setSearch} />
        <Pagination page={page} />
        <Loading>No matches found</Loading>
      </>
    )
  }

  const { data } = filteredCharacters

  return (
    <>
      <Search setSearch={setSearch} />
      <Pagination page={page} />
      <List page={page} characters={data} />
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const page = (ownProps.match.params as RouteParams).page
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
