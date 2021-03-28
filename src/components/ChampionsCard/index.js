// Styling Imports
import styled from 'styled-components';

// React Components
import { Link } from 'react-router-dom';

// Styled Component
const StyledChampionCard = styled.div`
    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }
`;
const StyledLinkDiv = styled.div`
    flex-direction: column;
    text-align: center;
    border-color: red;
    margin: 10px;
    img {
        border-radius: 50%;
    }
`;



const ChampionsCard = (props) => {
    return (
        <StyledChampionCard>
            <div>
                {props.champions.map((champion, idx) =>
                
                    <StyledLinkDiv key={champion.id}>
                        <Link
                        to={`/champions/${champion.id}`}
                        >
                        <img 
                            src={"https://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/" + champion.id + ".png"} 
                            alt=""
                        ></img>
                            <p>{champion.name}</p>  
                        </Link>
                    </StyledLinkDiv>
                )}
            </div>
        </StyledChampionCard>
    );
};

export default ChampionsCard;