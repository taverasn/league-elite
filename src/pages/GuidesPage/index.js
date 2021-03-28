// Styling Imports
import styled from 'styled-components';

// Component Imports
import { Link } from 'react-router-dom';

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #232323;
`;
const StyledGuideTypeDiv = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: black;
    justify-content: center;
    padding: 50px;
    a {
        padding: 1em;
        text-align: center;
        display: inline-block;
        text-decoration: none !important;
        margin: 0 auto;
    }
`;

const GuidesPage = (props) => {
    console.log(props.guides);
    return (
        <StyledPage>
                <StyledGuideTypeDiv>
                    <Link to="/guides/champions" >Champion Guides</Link>
                </StyledGuideTypeDiv>
                <StyledGuideTypeDiv>
                    <Link to="/guides/general" >General Guides</Link>
                </StyledGuideTypeDiv>
                <StyledGuideTypeDiv>
                    <Link to="/guides/lane" >Lane Guides</Link>
                </StyledGuideTypeDiv>
        </StyledPage>
    )
}

export default GuidesPage;