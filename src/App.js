import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import InstClassList from './components/InstClassList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navbar />
          </Route>
          <Route path='/'>
            <InstClassList />
          </Route>
          <Route exact path='/login'>
            <LoginForm />
          </Route>
          <Route exact path='/signup'>
            <SignupForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
