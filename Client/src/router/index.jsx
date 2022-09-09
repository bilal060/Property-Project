import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import PropertiesGrid from '../pages/PropertiesGrid';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />   
      <Route exact path="/PropertiesGrid" component={PropertiesGrid} />
    </Switch>
  );
};

export default Router;
