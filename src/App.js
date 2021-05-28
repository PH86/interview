import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
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

</Switch>

</Router>}


</SignInContext.Provider>
    </>
  );
}

export default App;
