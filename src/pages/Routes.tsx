import React from 'react'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { pageWidth } from '../styles'
import Character from './Character'
import Characters from './Characters'

const Container = styled.div`
  max-width: ${pageWidth};
  margin: 0 auto;
`

const Routes = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect exact from="/" to="/characters/a" />
          </Route>
          <Route
            exact
            path="/characters/:page"
            render={(props) => <Characters key={props.match.params.pageid} {...props} />}
          />
          <Route
            exact
            path="/characters/:page/:id"
            render={(props) => <Character key={props.match.params.pageid} {...props} />}
          />
        </Switch>
      </Router>
    </Container>
  )
}

export default Routes
