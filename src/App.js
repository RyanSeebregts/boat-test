import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from './pages/Profile';
import Boats from './pages/Boats';
import Rent from './pages/Rent';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/boats" component={Boats} />
    <Route exact={true} path="/profile" component={Profile} />
    <Route exact={true} path="/rent" component={Rent} />

    <Redirect from="" to="/boats" />
  </Switch>
);

export default App;
