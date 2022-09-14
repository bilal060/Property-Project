import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import PropertiesGrid from '../pages/PropertiesGrid';
import PropertiesList from '../pages/PropertiesList';
// import Dashboard from '../pages/Dashboard';
import AgentListingGrid from '../pages/AgentListingGrid';
import AgentListingRow from '../pages/AgentListingRow';
import SingleProperty from '../pages/SingleProperty';
import SubmitProperty from '../pages/SubmitProperty';
import AgentDetails from '../pages/AgentDetails';
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />   
      <Route exact path="/PropertiesGrid" component={PropertiesGrid} />
      <Route exact path="/PropertiesList" component={PropertiesList}/>
      {/* <Route exact path="/Dashboard" component={Dashboard}/> */}
      <Route exact path="/AgentListingGrid" component={AgentListingGrid}/>
      <Route exact path="/AgentListingRow" component={AgentListingRow}/>
      <Route exact path="/SingleProperty" component={SingleProperty}/>
      <Route exact path="/SubmitProperty" component={SubmitProperty}/>
      <Route exact path="/AgentDetails" component={AgentDetails}/>

    </Switch>
  );
};

export default Router;
