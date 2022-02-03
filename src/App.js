import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import InstClassList from "./components/InstClassList";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/HomePage";

function App() {
  return (
    // <div className="App">
    //   <Route path='/' component={Navbar} />
    //   <Route path='/' component={InstClassList} />

    // </div>

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/">
            <InstClassList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
