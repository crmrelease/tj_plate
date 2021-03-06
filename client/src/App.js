import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import TokenPage from './components/views/TokenPage/TokenPage';
import NavBar from "./components/views/NavBar/NavBar";
import Auth from './hoc/auth';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}> 
      <NavBar />
<div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
  <BrowserRouter>
  <Switch>
          <Route exact path="/" component={Auth(LandingPage,null)}/>
          <Route exact path="/login" component={Auth(LoginPage,false)}/>
          <Route exact path="/join" component={Auth(RegisterPage,false)}/>
          <Route exact path="/token" component={Auth(TokenPage,false)}/>
  </Switch>
  </BrowserRouter>
</div>
</Suspense>
  );
}

export default App;
