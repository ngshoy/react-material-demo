import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const RoutesDef = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/About' component={About} />
  </Switch>
);

export default RoutesDef;