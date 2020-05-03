import { combineReducers } from 'redux'
import { Action, ActionType, Meta, Options } from '../interfaces'

interface State {
  pending: boolean
  meta: Meta
  // also [key: string]: MarvelResponse
}

const initialState: State = {
  pending: false,
  meta: undefined,
}

export const getKey = ({ page }: Options) => {
  return `charactersRequest.${page}`
}

const requestReducer = (state: State = initialState, action: Action) => {
  if (action.payload) {
    const opts = action.payload.options
    const key = getKey(opts)
    switch (action.type) {
      case ActionType.CHARACTERS_REQUEST_PENDING:
        return {
          ...state,
          pending: true,
          [key]: opts,
        }
      case ActionType.CHARACTERS_REQUEST_SUCCEEDED:
        return {
          ...state,
          pending: false,
          [key]: { ...opts, ...action.payload.response },
          meta: action.payload.response.meta,
        }
      case ActionType.CHARACTERS_REQUEST_FAILED:
        return {
          ...state,
          pending: false,
          [key]: { ...opts, errorMessage: action.payload.errorMessage },
        }
      default:
        return state
    }
  }
  return state
}

export default combineReducers({
  requestReducer,
})
