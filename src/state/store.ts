import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}

export const store = configureStore()
