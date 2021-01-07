// eslint-disable-next-line
import { useState, useEffect } from 'react';
import './App.css';

// Components
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import ChampionsPage from './pages/ChampionsPage';
import Header from './components/Header';
import Footer from './components/Footer';


// eslint-disable-next-line
import { Route, Switch, Redirect } from 'react-router-dom';
// eslint-disable-next-line
import { getUser, logout } from './services/userService';


function App(props) {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path='/' render={props =>
              <HomePage {...props}/>        
            } />
            <Route exact path='/signup' render={props =>
              <SignupPage {...props}/>
            } />
            <Route exact path='/login' render={props =>
              <LoginPage {...props}/>
            } />
            <Route exact path='/dashboard' render={props =>
              <DashboardPage {...props}/>
            } />
            <Route exact path='/champions' render={props =>
              <ChampionsPage {...props}/>
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;
