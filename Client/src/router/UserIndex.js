import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
// import Home from '../pages/Home';
import Dashboard from '../pages/UserDashoard';
import UserProfile from '../pages/UserProfile';
import UserProperties from '../pages/UserProperties';
import UserFavoriteProperties from '../pages/UserFavoriteProperties';
import UserAddProperty from '../pages/UserAddProperty';
import UserPaymentMethod from '../pages/UserPaymentMethod';
import UserInvoice from '../pages/UserInvoice';
import ChangePassword from '../components/UserProfile/ChangePassword/ChangePassword';

const UserRouter = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} />   */}
      <Route exact path="/dashboard" component={Dashboard} />  
      <Route exact path="/UserProfile" component={UserProfile} />  
      <Route exact path="/UserProperties" component={UserProperties} />  
      <Route exact path="/UserFavProperties" component={UserFavoriteProperties} />  
      <Route exact path="/UserAddProperties" component={UserAddProperty} />  
      <Route exact path="/UserPaymentMethod" component={UserPaymentMethod} />  
      <Route exact path="/UserInvoice" component={UserInvoice} />  
      <Route exact path="/UserChangePassword" component={ChangePassword} />  

    </Switch>
  );
};

export default UserRouter;