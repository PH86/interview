import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import JobVacancies from './pages/JobVacancies/JobVacancies';
import CanditateSearch from './pages/CandidateSearch/CandidateSearch';
import ReportingStudio from './pages/ReportingStudio/ReportingStudio';
import UserSettings from './pages/UserSettings/UserSettings';
import Account from './pages/Account/Account';
import SignIn from './pages/SignIn/SignIn';
import { SignInContext } from './context';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
    <SignInContext.Provider value={{loggedIn, setLoggedIn}}>
  {!loggedIn? <SignIn/> : <Router>
<Sidebar />
<Switch>
<Route path='/interview/dashboard' exact component={Dashboard} />
<Route path='/interview/jobs' exact component={JobVacancies} />
<Route path='/interview/candidates' exact component={CanditateSearch} />
<Route path='/interview/studio' exact component={ReportingStudio} />
<Route path='/interview/settings' exact component={UserSettings} />
<Route path='/interview/account' exact component={Account} />

</Switch>

</Router>}


</SignInContext.Provider>
    </>
  );
}

export default App;
