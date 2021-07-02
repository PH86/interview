import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

import { urls } from "./constants";

const  PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

    // This is the conditional to decide whether the user has been authenticated
    // Currently just checking for a token value in local storage
    const loggedIn = localStorage.getItem('token')

    return loggedIn ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : ( <Redirect to={urls.signIn} />);
};
export  default  PrivateRoute;