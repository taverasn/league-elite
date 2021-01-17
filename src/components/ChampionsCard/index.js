// Styling Imports
import styled from 'styled-components';

// Component Imports
import ChampionModal from '../ChampionModal';

// Styled Component
const StyledChampionCard = styled.div`
    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }
`;


const ChampionsCard = (props) => {
    return (
        <StyledChampionCard>
            <div>
                {props.Champions.map((champion, idx) =>
                <ChampionModal
                champion={champion}
                key={champion.name}
                />
                )}
            </div>
        </StyledChampionCard>
    );
};

export default ChampionsCard;