import { Route, Link, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/UserDashoard';
import UserProfile from '../pages/UserProfile';
import UserProperties from '../pages/UserProperties';
import UserFavoriteProperties from '../pages/UserFavoriteProperties';
import UserAddProperty from '../pages/UserAddProperty';
import UserPaymentMethod from '../pages/UserPaymentMethod';
import UserInvoice from '../pages/UserInvoice';
import UserChangePassword from '../pages/UserChangePassword';
import { AgentRoutes, AuthenticatedRoutes } from '../../utils/ProtectedRoutes';

const UserRouter = () => {
    return (
        <Switch>
            <AgentRoutes exact path="/dashboard" component={Dashboard} />
            <AuthenticatedRoutes exact path="/dashboard/Profile" component={UserProfile} />
            <AgentRoutes exact path="/dashboard/Properties" component={UserProperties} />
            <AuthenticatedRoutes exact path="/dashboard/FavProperties" component={UserFavoriteProperties} />
            <AgentRoutes exact path="/dashboard/AddProperty" component={UserAddProperty} />
            <AgentRoutes exact path="/dashboard/PaymentMethod" component={UserPaymentMethod} />
            <AgentRoutes exact path="/dashboard/Invoice" component={UserInvoice} />
            <AuthenticatedRoutes exact path="/dashboard/ChangePassword" component={UserChangePassword} />
        </Switch>
    );
};

export default UserRouter;