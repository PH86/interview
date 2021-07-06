import { Switch, Route, Redirect } from "react-router-dom";
import AuthenticatedRoute from 'utils/AuthenticatedRoute'

import { url } from './constants';

import { Dashboard } from "pages/Dashboard/Dashboard";
import { SignIn, PasswordReset, Register } from "pages/Auth";
import { JobVacancies } from "pages/JobVacancies/JobVacancies";
import { CandidateSearch } from "pages/CandidateSearch/CandidateSearch";
import { ReportingStudio } from "pages/ReportingStudio/ReportingStudio";
import { UserSettings } from "pages/UserSettings/UserSettings";
import { Account } from "pages/Account/Account";
import { SingleJob } from "pages/SingleJob/SingleJob";

const DefaultRoute = () => (
    <div className="content-container">
        <h1>You look lost... 🙄</h1>
    </div>
)

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={url.signIn} component={SignIn} />
            <Route exact path={url.passwordReset} component={PasswordReset} />
            <Route exact path={url.register} component={Register} />
            <AuthenticatedRoute exact path={url.home} component={Dashboard} />
            <Redirect from={url.dashboard} to={url.home} />
            <AuthenticatedRoute exact path={`${url.jobs}/:id`} component={SingleJob} />
            <AuthenticatedRoute exact path={url.jobs} component={JobVacancies} />
            <AuthenticatedRoute path={url.candidates} exact component={CandidateSearch} />
            <AuthenticatedRoute path={url.studio} exact component={ReportingStudio} />
            <AuthenticatedRoute path={url.settings} exact component={UserSettings} />
            <AuthenticatedRoute path={url.account}exact component={Account} />
            <AuthenticatedRoute path={"*"} component={DefaultRoute} />
        </Switch>    
    )
}
