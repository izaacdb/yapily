import React from 'react'
import styled from 'styled-components'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Character from '../pages/Character'
import Characters from '../pages/Characters'
import { pageWidth } from '../styles'

const Container = styled.div`
  max-width: ${pageWidth};
  margin: 0 auto;
  overflow: hidden;
`

export interface RouteParams {
  page: string
  id: string
}

const Routes = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect exact from="/" to="/characters/0" />
          </Route>
          <Route
            path="/characters/:page"
            render={(props) => <Characters key={props.match.params.pageid} {...props} />}
          />
          <Route path="/character/:id">
            <Character />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default Routes
