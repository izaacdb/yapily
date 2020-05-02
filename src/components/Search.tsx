import React, { FunctionComponent } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'
import { white } from '../styles'

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  padding: 1rem 0;
  margin: 0 1rem 0;
`
const SearchBox = styled.input`
  outline: none;
  font-size: 2rem;
  border: 0;
  border-bottom: 0.2rem solid ${white};
  background: #333;
  color: #fff;
  padding: 0 0.5rem;
`

interface Props {
  setSearch: (search: string) => void
}

// stops loss of synthetic event & event stacking
let debouncedFn

const onChange = (event, setSearch) => {
  event.persist()

  if (!debouncedFn) {
    debouncedFn = debounce(() => {
      setSearch(event.target.value)
    }, 300)
  }
  debouncedFn()
}

const Search: FunctionComponent<Props> = ({ setSearch }) => {
  return (
    <Wrapper>
      <SearchBox placeholder="Filter this page" type="text" onChange={(e) => onChange(e, setSearch)} />
    </Wrapper>
  )
}

export default Search
