import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Tutorlist from '~/pages/tutorlist'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Tutorlist} />
  </Switch>
)

export default Routes
