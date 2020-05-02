import React, { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { simpleAction } from '../state/actions'
import List from '../components/List'
import Pagination from '../components/Pagination'
import { count, getCharacters } from '../api'
import { RouteParams } from '../components/Routes'
import Search from '../components/Search'

interface Props {
  simpleAction: typeof simpleAction
}

const Characters: FunctionComponent<Props> = ({ simpleAction }) => {
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
      <button onClick={simpleAction}>a</button>
      <Search setSearch={setSearch} />
      <Pagination page={page} meta={meta} />
      <List characters={data} />
    </>
  )
}

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
