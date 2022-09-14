import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import AllProperties from '../pages/AllProperties';
// import Dashboard from '../pages/Dashboard';
import AllAgents from '../pages/AllAgents';
import SingleProperty from '../pages/PropertyDetails';
import SubmitProperty from '../pages/SubmitProperty';
import AgentDetails from '../pages/AgentDetails';
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/AllProperties" component={AllProperties} />
      {/* <Route exact path="/Dashboard" component={Dashboard}/> */}
      <Route exact path="/AllAgents" component={AllAgents} />
      <Route exact path="/propertydetails" component={SingleProperty} />
      <Route exact path="/SubmitProperty" component={SubmitProperty} />
      <Route exact path="/agentdetails" component={AgentDetails} />
    </Switch>
  );
};

export default Router;
