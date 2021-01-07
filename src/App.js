// eslint-disable-next-line
import { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
// eslint-disable-next-line
import { Route, Switch, Redirect } from 'react-router-dom';
// eslint-disable-next-line
import { getUser, logout } from './services/userService';


function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() =>
          <HomePage />        
        } />
      </Switch>
    </div>
  );
}

export default App;
