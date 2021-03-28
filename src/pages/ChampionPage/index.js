// Styling Imports
import styled from 'styled-components';

// Component Imports

// React Imports
import { useState, useEffect } from 'react';

// Service Imports
import { getSingleChampion } from '../../services/lol-api';

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  h1 {
    color: red;
  }
`;

const StyledDiv = styled.div`
  flex-grow: 1;
`;

const ChampionPage = (props) => {

  const [championData, setChampionsData] = useState([]);

  async function getChampionsData(championId) {
    const data = await getSingleChampion(championId);
    const mutateData = Object.values(data.data);
    console.log(mutateData[0]);
    setChampionsData(mutateData[0]);
  }

  useEffect(() => {
    getChampionsData(props.champion[0].id);
  }, [props.champion]);

  return (
    <StyledPage>
      <StyledDiv>
        <h1>{championData.name}</h1>
      </StyledDiv>
    </StyledPage>
  )
}

export default ChampionPage;