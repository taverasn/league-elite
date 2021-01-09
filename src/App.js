

import './App.css';

// Component Imports
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import ChampionsPage from './pages/ChampionsPage';
import Header from './components/Header';
import Footer from './components/Footer';

// React Imports
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Service Imports
import { getUser, logout } from './services/userService';
import { getChampions } from './services/lol-api';


function App(props) {

  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  }

  function handleLogout() {
    logout();

    setUserState({ user: null });

    props.history.push('/');
  }


  const [championData, setChampionData] = useState({
    blurb: null,
    id: null,
    image: null,
    info: null,
    key: null,
    name: null,
    partype: null,
    stats: null,
    tags: null,
    title: null,
    version: null
  })

  async function getAppData() {
    const data = await getChampions();
    const mutateData = Object.values(data.data);
    setChampionData(mutateData);
    console.log(mutateData);
  }

  useEffect(() => {
    getAppData();
    console.log('effect');
  }, []);

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path='/' render={props =>
              <HomePage {...props}/>        
            } />
            <Route exact path='/signup' render={props =>
              <SignupPage 
              {...props} 
              handleSignupOrLogin={handleSignupOrLogin}/>
            } />
            <Route exact path='/login' render={props =>
              <LoginPage 
              {...props} 
              handleSignupOrLogin={handleSignupOrLogin}/>
            } />
            <Route exact path='/dashboard' render={props =>
              userState.user ?
              <DashboardPage {...props}/>
              :
              <Redirect to="/login" />
            } />
            <Route exact path='/champions' render={props =>
              userState.user ?

              <ChampionsPage 
              {...props}
              Champions={championData}
              />
              :
              <Redirect to="/login"/>
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
