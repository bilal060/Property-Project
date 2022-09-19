import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Faq from '../pages/Faq';
import ContactUs from '../pages/ContactUs';
import BlogDetails from '../pages/BlogDetails';
import ComingSoon from '../pages/ComingSoon';
import AllProperties from '../pages/AllProperties';
import AllAgents from '../pages/AllAgents';
import SingleProperty from '../pages/PropertyDetails';
import AgentDetails from '../pages/AgentDetails';
import { AuthRoutes } from '../utils/ProtectedRoutes';
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/AllProperties" component={AllProperties} />
      {/* <Route exact path="/Dashboard" component={Dashboard}/> */}
      <Route exact path="/AllAgents" component={AllAgents} />
      <Route exact path="/propertydetails" component={SingleProperty} />
      <Route exact path="/agentdetails" component={AgentDetails} />
      <AuthRoutes exact path="/login" component={Login} />
      <AuthRoutes exact path="/register" component={Register} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/blog-details" component={BlogDetails} />
      <Route exact path="/coming-soon" component={ComingSoon} />
    </Switch>
  );
};

export default Router;
