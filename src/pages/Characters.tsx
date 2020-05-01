import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List'
import Pagination from '../components/Pagination'
import { count, getCharacters } from '../api'
import { RouteParams } from '../components/Routes'
import Search from '../components/Search'

const Characters: FunctionComponent = () => {
  const { page } = useParams<RouteParams>()
  const [{ data, meta }, setResponse] = useState({ data: undefined, meta: undefined })
  const [search, setSearch] = useState('')

  useEffect(() => {
    getCharacters('' + +page * count).then((response) => {
      const filteredResponse = {
        ...response,
        data: response.data.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())),
      }
      setResponse(filteredResponse)
    })
  }, [page, search])

  return (
    <>
      <Search setSearch={setSearch} />
      <Pagination page={page} meta={meta} />
      <List characters={data} />
    </>
  )
}

export default Characters
