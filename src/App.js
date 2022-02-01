import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import InstClassList from './components/InstClassList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    // <div className="App">
    //   <Route path='/' component={Navbar} />
    //   <Route path='/' component={InstClassList} />

    // </div>

    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navbar />
          </Route>
          <Route exact path='/'>
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
