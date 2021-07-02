import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import PrivateRoute from 'utils/PrivateRoute'

import { urls } from './constants';

import { Dashboard } from "pages/Dashboard/Dashboard";
import { SignIn } from "pages/SignIn/SignIn";

const DefaultRoute = () => (
    <div className="content-container">
        <h1>You look lost... 🙄</h1>
    </div>
)

export const Routes = () => {
    return (
        <Switch>
            <Route path={urls.signIn} exact component={SignIn} />
            <PrivateRoute exact path={urls.dashboard} component={Dashboard} />
            <Route path={"*"} component={DefaultRoute} />
        </Switch>    
    )
}

{/* <Switch location={ location } key={ location.pathname }>
<Redirect exact from="/interview" to="/interview/dashboard" />
<Route path="/interview/dashboard" exact component={Dashboard} />
<Route path="/interview/jobs" exact component={JobVacancies} />
<Route path="/interview/candidates" exact component={CandidateSearch} />
<Route path="/interview/studio" exact component={ReportingStudio} />
<Route path="/interview/settings" exact component={UserSettings} />
<Route path="/interview/account" exact component={Account} />
<Route path="/interview/jobs/:id">
    <SingleJob />
</Route>
</Switch> */}
