// Styling Imports
import styled from 'styled-components';

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  div {
      color: red;
  }
`;


const GuideDetailPage = (props) => {
    const guide = props.guide[0];
    console.log(guide);
    return (
        <StyledPage>
                <div>{guide.name}</div>
                <div>{guide.type}</div>
                <div>{guide.role}</div>
                <div>{guide.champion}</div>
                <div>{guide.items}</div>
                <div>{guide.runes}</div>
                <div>{guide.abilities}</div>
        </StyledPage>
    )
}

export default GuideDetailPage;