import { combineReducers } from 'redux'
import { Action, ActionType, Options } from './actions'

const initialState = {}

const createKey = ({ path, count, index }: Options) => {
  return `${path}|${count}|${index}`
}

const requestReducer = (state = initialState, action: Action) => {
  const opts = action.payload.options
  const key = createKey(opts)
  switch (action.type) {
    case ActionType.CHARACTERS_REQUEST_PENDING:
      return {
        ...state,
        [key]: opts,
      }
    case ActionType.CHARACTERS_REQUEST_SUCCEEDED:
      return {
        ...state,
        [key]: { ...opts, ...action.payload.response },
      }
    case ActionType.CHARACTERS_REQUEST_FAILED:
      return {
        ...state,
        [key]: { ...opts, errorMessage: action.payload.errorMessage },
      }
    default:
      return state
  }
}

export default combineReducers({
  requestReducer,
})
