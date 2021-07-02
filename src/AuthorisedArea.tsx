import React from "react";
import { Router } from "react-router-dom";
import styled from "styled-components";

import "App.css";
import * as themeConf from 'themes/theme';

import { Sidebar } from "components";
import { Routes } from 'utils/Routes' 
import history from 'utils/history';

const MainContentContainer = styled.div`
	background-color: ${themeConf.backgroundColor};
	color: ${themeConf.textColor};
	transition: var(--transition);
`;

const AuthorisedArea: React.FC<{}> = (): React.ReactElement => {
	return (
        <>
            <Sidebar />
            <MainContentContainer>
                <Router history={history}>
                    <Routes />
                </Router>
            </MainContentContainer>
        </>
	);
}

export default AuthorisedArea;
