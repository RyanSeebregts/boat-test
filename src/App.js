import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/home" component={Home} />
    <Route exact={true} path="/about" component={About} />
    <Redirect from="" to="/home" />
  </Switch>
);

export default App;
