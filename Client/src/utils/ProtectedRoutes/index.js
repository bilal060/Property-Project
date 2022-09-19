import React from "react";
import { Route, Redirect } from "react-router-dom";
import Hooks from "../../hooks";

export const AuthRoutes = ({
    component: Component,
    ...rest
}) => {
    const { IsUserLoggedIn } = Hooks();

    return (
        <Route
            {...rest}
            render={props => {
                if (IsUserLoggedIn() === false) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};



export const AgentRoutes = ({
    component: Component,
    ...rest
}) => {
    const { IsUserLoggedIn, AgentRole } = Hooks();
    return (
        <Route
            {...rest}
            render={props => {
                if (IsUserLoggedIn() && AgentRole()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};


export const AuthenticatedRoutes = ({
    component: Component,
    ...rest
}) => {
    const { IsUserLoggedIn, AgentRole } = Hooks();
    return (
        <Route
            {...rest}
            render={props => {
                if (IsUserLoggedIn() || AgentRole()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

