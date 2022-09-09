import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Faq from '../pages/Faq';
import ContactUs from '../pages/ContactUs';
import BlogDetails from '../pages/BlogDetails';
import ComingSoon from '../pages/ComingSoon';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/contact" component={ContactUs} />
      <Route exact path="/blog-details" component={BlogDetails} />
      <Route exact path="/coming-soon" component={ComingSoon} />


    </Switch>
  );
};

export default Router;
