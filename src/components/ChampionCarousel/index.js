// // Styling Imports
// import styled from 'styled-components';

// // React Bootstrap Imports
// import Carousel from 'react-bootstrap/Carousel';

// const StyledCarousel = styled.div`
//     div {
//         img {
//             width: 175px;
//             height: 175px;
//         }
//     }
// `;

// const ChampionCarousel = (props) => {

//     return (
//         <StyledCarousel>
//             <Carousel
//             controls={false}
//             indicators={false}
//             fade={true}
//             >
//            {props.championData.skins.map((skin, idx) =>
//             <Carousel.Item
//             key={idx}
//             >
//                 <img
//                 src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + props.championData.id + "_" + skin.num + ".jpg"}
//                 alt={skin.name}
//                 />
//             </Carousel.Item>
//            )}
//            </Carousel>
//         </StyledCarousel>
//     );
// };

// export default ChampionCarousel;