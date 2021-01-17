// Styling Imports
import styled from 'styled-components';

// Styled Component
const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #007bff;
`;

const Footer = (props) => {
    return (
        <StyledFooter>
            <p>Copyright &copy; All rights reserved {new Date().getFullYear()} League Elite</p>
        </StyledFooter>
    );
};

export default Footer;