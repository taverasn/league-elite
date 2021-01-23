// Styling Imports
import styled from 'styled-components';

// Component Imports
import ChampionCarousel from '../../components/ChampionsCarousel';

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
`;

const HomePage = (props) => {
    return (
        <StyledPage>
          <ChampionCarousel
          champions={props.champions}
          />
        </StyledPage>
    )
}

export default HomePage;
