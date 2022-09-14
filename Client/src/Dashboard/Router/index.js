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
import UserChangePassword from '../pages/UserChangePassword';

const UserRouter = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/Profile" component={UserProfile} />
            <Route exact path="/dashboard/Properties" component={UserProperties} />
            <Route exact path="/dashboard/FavProperties" component={UserFavoriteProperties} />
            <Route exact path="/dashboard/AddProperty" component={UserAddProperty} />
            <Route exact path="/dashboard/PaymentMethod" component={UserPaymentMethod} />
            <Route exact path="/dashboard/Invoice" component={UserInvoice} />
            <Route exact path="/dashboard/ChangePassword" component={UserChangePassword} />
        </Switch>
    );
};

export default UserRouter;