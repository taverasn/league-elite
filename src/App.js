import Header from './components/Header';
import Footer from './components/Footer';
// eslint-disable-next-line
import { useState, useEffect } from 'react';
import './App.css';

// Page Compnents
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import ChampionPage from './pages/ChampionPage';
import ChampionsPage from './pages/ChampionsPage'


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
            <Route exact path='/' render={() =>
              <HomePage />        
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;
