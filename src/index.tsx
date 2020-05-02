import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './components/Routes'
import * as serviceWorker from './serviceWorker'
import { GlobalStyles } from './styles'
import configureStore from './state/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <GlobalStyles />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
