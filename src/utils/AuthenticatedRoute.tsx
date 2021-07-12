import { Route, Redirect, RouteProps } from "react-router-dom";
import styled from "styled-components";

import { Sidebar } from "components";
import * as themeConf from "themes/theme";
import { url } from "./constants";

const MainContentContainer = styled.div`
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  transition: var(--transition);
`;

export default function AuthenticatedRoute({ ...routeProps }: RouteProps) {
  const loggedIn = localStorage.getItem("token");

  if (loggedIn) {
    return (
      <MainContentContainer>
        <Sidebar />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Route {...routeProps} />
      </MainContentContainer>
    );
  }
  return <Redirect to={{ pathname: url.signIn }} />;
}
