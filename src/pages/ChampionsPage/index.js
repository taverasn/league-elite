// Styling Imports
import styled from 'styled-components';

// Component Imports
import ChampionsCard from '../../components/ChampionsCard';
import SearchBar from '../../components/SearchBar';

// Styled Component
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
`;

const ChampionsPage = (props) => {
    return (
        <StyledPage>
            <div className="SearchBar">
            <SearchBar
            champions={props.champions}
            />
            </div>
            <div className="ChampionsCard">             
                <ChampionsCard
                champions={props.champions}
                getChampionData={props.getChampionData}
                />
            </div>
        </StyledPage>
    )
}

export default ChampionsPage;