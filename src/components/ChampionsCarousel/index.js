// Styling Imports
import styled from 'styled-components';

// React Bootstrap Imports
import Carousel from 'react-bootstrap/Carousel';

// Styled Component
const StyledChampionsCarousel = styled.div`
    .Header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
            color: #007bff;
        }
        p {
            color: #0048aa;
        }
    }
`;


const ChampionsCarousel = (props) => {
    return (
        <StyledChampionsCarousel>
            <div className="Header">
                <h1>Welcome To League Elite</h1>
                <p>Find Everything You Need From Individual Champion Data To Guides That Will Change Your Game</p>
            </div>
           <Carousel
           controls={false}
           indicators={false}
           fade={true}
           >
           {props.champions.map((champion, idx) =>
            <Carousel.Item
            key={idx}
            >
                <img
                className="d-block"
                src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_0.jpg"}
                alt={champion.id}
                />
            </Carousel.Item>
           )}
           </Carousel>
        </StyledChampionsCarousel>
    );
};

export default ChampionsCarousel;