import { RouteProps } from 'react-router';
import { Route, Redirect } from  "react-router-dom";
import styled from "styled-components";

import * as themeConf from 'themes/theme';
import { url } from "./constants";

import { Sidebar } from "components";

const MainContentContainer = styled.div`
	background-color: ${themeConf.backgroundColor};
	color: ${themeConf.textColor};
	transition: var(--transition);
`;

export default function AuthenticatedRoute({...routeProps}: RouteProps) {
    const loggedIn = localStorage.getItem('token')
  
    if(loggedIn) {
        return (
             <MainContentContainer>
                <Sidebar />
                <Route {...routeProps} />
            </MainContentContainer>
        );
    } else {
        return <Redirect to={{ pathname: url.signIn }} />;
    }
};
