// Styling
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Page Imports
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import ChampionsPage from './pages/ChampionsPage';
import ChampionPage from './pages/ChampionPage';
import GuidesPage from './pages/GuidesPage';
import GuideTypePage from './pages/GuideTypePage';
import CreateGuidePage from './pages/CreateGuidePage';
import EditGuidePage from './pages/EditGuidePage';
import GuideDetailPage from './pages/GuideDetailPage';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// React Imports
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Service Imports
import { getUser, logout } from './services/userService';
import { getChampions } from './services/lol-api';
import { fetchGuideData, addGuideData, deleteGuideData, updateGuideData, editGuideData } from './services/guideService';

// Styled Component
const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex-grow: 1;
  }
`;

function Layout(props) {

  // User Functions and State
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

  // Champion Functions and State
  const [championsData, setChampionsData] = useState([]);

  async function getChampionsData() {
    const data = await getChampions();
    const mutateData = Object.values(data.data);
    setChampionsData(mutateData);
  }

  useEffect(() => {
    getChampionsData();
  }, []);
  // Guide Functions and State
  const [ guideData, setGuideData ] = useState([]);

  useEffect(() => {
      getGuides();
  }, []);

  async function getGuides() {
    const data = await fetchGuideData();
    setGuideData(data);
  }

  // Full CRUD Functions for Guides
  async function createGuide(guide) {
    const data = await addGuideData(guide, userState.user._id);
    setGuideData(data);
    getGuides();
  }

  async function deleteGuide(id) {
    await deleteGuideData(id, userState.user._id);
    setGuideData(guideData.filter((guide) => guide._id !== id));
  }

  const [ editing, setEditing ] = useState(false)

  const initialFormState = { id: null, name: "", type: "", role: "", champion: "", items: "", runes: "", abilities: "" }

  const [ currentGuide, setCurrentGuide ] = useState(initialFormState)

  async function editRow(guide) {
    setEditing(true)
    await editGuideData(guide._id)
    setCurrentGuide({ id: guide._id, name: guide.name, type: guide.type, role: guide.role, champion: guide.champion, items: guide.items, runes: guide.runes, abilities: guide.abilities })
  }

  async function updateGuide(id, updatedGuide) {
    setEditing(false)
    await updateGuideData(id, updatedGuide)
    setGuideData(guideData.filter((guide) => (guide._id === id ? updatedGuide : guide)))
    getGuides();
  }

  return (
    <StyledLayout>
      <Header handleLogout={handleLogout} user={userState.user} />
        <main>
          <Switch>
            <Route exact path='/' render={props =>
              <HomePage 
              {...props}
              champions={championsData}
              />        
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
              champions={championsData}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/champions/:id' render={props =>
              userState.user ?
              <ChampionPage 
                {...props}
                champion={championsData.filter((champion) => (champion.id === props.match.params.id))}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/guides' render={props =>
              userState.user ?
              <GuidesPage 
              {...props}
              guides={guideData}
              user={userState.user}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/guides/champions' render={props =>
              userState.user ?
              <GuideTypePage 
              {...props}
              guides={guideData.filter((guide) => (guide.type === 'Champion'))}
              editRow={editRow}
              deleteGuide={deleteGuide}
              user={userState.user}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/guides/lane' render={props =>
              userState.user ?
              <GuideTypePage 
              {...props}
              guides={guideData.filter((guide) => (guide.type === 'Lane'))}
              editRow={editRow}
              deleteGuide={deleteGuide}
              user={userState.user}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/guides/general' render={props =>
              userState.user ?
              <GuideTypePage 
              {...props}
              guides={guideData.filter((guide) => (guide.type === 'General'))}
              editRow={editRow}
              deleteGuide={deleteGuide}
              user={userState.user}
              />
              :
              <Redirect to="/login"/>
            } />             
            <Route exact path='/guides/:id' render={props =>
              userState.user ?
              <GuideDetailPage 
              {...props}
              editRow={editRow}
              deleteGuide={deleteGuide}
              user={userState.user}
              guide={guideData.filter((guide) => (guide._id === props.match.params.id))}
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
              user={userState.user}
              champions={championsData}
              />
              :
              <Redirect to="/login"/>
            } />             
            {editing ? 
              <Route exact path='/editguide/:id' render={props =>
                <EditGuidePage 
                {...props}
                setEditing={setEditing}
                currentGuide={currentGuide}
                updateGuide={updateGuide}
                user={userState.user}
                champions={championsData}
                />
              } />
            :
              <Route exact path='/createguide' render={props =>
                userState.user ?
                <CreateGuidePage 
                {...props}
                createGuide={createGuide}
                guides={guideData}
                user={userState.user}
                champions={championsData}
                />
                :
                <Redirect to="/login"/>
              } />
            }         
          </Switch>
        </main>
      <Footer />
    </StyledLayout>
  );
}

export default withRouter(Layout);
