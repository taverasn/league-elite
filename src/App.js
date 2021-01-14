import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Page Imports
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import ChampionsPage from './pages/ChampionsPage';
import GuidesPage from './pages/GuidesPage';
import CreateGuidePage from './pages/CreateGuidePage';
import EditGuidePage from './pages/CreateGuidePage';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// React Imports
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Service Imports
import { getUser, logout } from './services/userService';
import { getChampions} from './services/lol-api';
import { fetchGuideData, addGuideData } from './services/guideService';


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


  const [championsData, setChampionsData] = useState([])

  async function getChampionsData() {
    const data = await getChampions();
    const mutateData = Object.values(data.data);
    setChampionsData(mutateData);
    console.log(mutateData);
  }

  useEffect(() => {
    getChampionsData();
    console.log('effect');
  }, []);

  const [ guideData, setGuideData ] = useState([]);

  useEffect(() => {
      getGuides();
  }, []);

  async function getGuides() {
    const data = await fetchGuideData();
    setGuideData(data);
    console.log(data);
  }

  async function createGuide(guide) {
    const data = await addGuideData(guide);
    setGuideData(data);
    console.log(data);
  }

  const deleteGuide = (id) => {
    setEditing(false)

    setGuideData(guideData.filter((guide) => guide.id !== id))
  }

  const [ editing, setEditing ] = useState(false)
  const initialFormState = { id: null, name: "", type: "" }

  const [ currentGuide, setCurrentGuide ] = useState(initialFormState)

  const editRow = (guide) => {
    setEditing(true)

    setCurrentGuide({ id: guide.id, name: guide.name, type: guide.type })
  }

  const updateGuide = (id, updatedGuide) => {
    setEditing(false)

    setGuideData(guideData.map((guide) => (guide.id === id ? updatedGuide : guide)))
  }

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
              Champions={championsData}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/guides' render={props =>
              userState.user ?
              <GuidesPage 
              {...props}
              guides={guideData}
              editRow={editRow}
              deleteGuide={deleteGuide}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/createguide' render={props =>
              userState.user ?
              <CreateGuidePage 
              {...props}
              createGuide={createGuide}
              guides={guideData}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/editguide' render={props =>
              editing ? 
              <EditGuidePage 
              {...props}
              setEditing={setEditing}
              currentGuide={currentGuide}
              updateGuide={updateGuide}
              createGuide={createGuide}
              guides={guideData}
              />
              :
              <Redirect 
              to="/createguide"/>
            } />             
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
