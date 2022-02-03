import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import Navbar from './components/Navbar';
import AuthNavbar from "./components/AuthNavbar";
import InstClassList from './components/InstClassList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ClientClassList from './components/ClientClassList';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <LoginForm />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <SignupForm />
          </Route>
          <Route exact path="/instructor">
            <AuthNavbar />
            <InstClassList />
          </Route>
          <Route exact path='/client'>
            <AuthNavbar />
            <ClientClassList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
