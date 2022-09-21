import { Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/UserDashoard';
import UserProfile from '../pages/UserProfile';
import UserProperties from '../pages/UserProperties';
import UserFavoriteProperties from '../pages/UserFavoriteProperties';
import UserAddProperty from '../pages/UserAddProperty';
import UserPaymentMethod from '../pages/UserPaymentMethod';
import UserInvoice from '../pages/UserInvoice';
import UserChangePassword from '../pages/UserChangePassword';
import AllSocieties from "../pages/AllSocieties";
import AllBlocks from '../pages/Blocks';
import AllPhases from '../pages/Phases';

import { AdminRoutes, ProtectedRoutes, AuthenticatedRoutes } from '../../utils/ProtectedRoutes';
const UserRouter = () => {
    return (
        <Switch>
            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
            <AuthenticatedRoutes exact path="/dashboard/Profile" component={UserProfile} />
            <ProtectedRoutes exact path="/dashboard/Properties" component={UserProperties} />
            <AuthenticatedRoutes exact path="/dashboard/FavProperties" component={UserFavoriteProperties} />
            <ProtectedRoutes exact path="/dashboard/AddProperty" component={UserAddProperty} />
            <ProtectedRoutes exact path="/dashboard/PaymentMethod" component={UserPaymentMethod} />
            <ProtectedRoutes exact path="/dashboard/Invoice" component={UserInvoice} />
            <ProtectedRoutes exact path="/dashboard/AllSocieties" component={AllSocieties} />
            <ProtectedRoutes exact path="/dashboard/Blocks" component={AllBlocks} />
            <ProtectedRoutes exact path="/dashboard/Phases" component={AllPhases} />
            <AuthenticatedRoutes exact path="/dashboard/ChangePassword" component={UserChangePassword} />
        </Switch>
    );
};

export default UserRouter;