// Styling Imports
import styled from 'styled-components';

// React Components
import { Link } from 'react-router-dom';

// Styled Component
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    box-shadow: 3px 3px 5px 3px lightgrey;
    nav > ul {
    display: flex;
    list-style: none;
    }
    nav > ul li {
    font-size: 25px;
    margin-right: 20px;
    }
`;

const Header = (props) => {

    return (
        <StyledHeader>
            <Link to="/">
                <h1>League Elite</h1>
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                        <li>
                            <Link to="/" onClick={props.handleLogout}>Log Out</Link>
                        </li>
                        {/* <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li> */}
                        <li>
                            <Link to="/champions">Champions</Link>
                        </li>
                        <li>
                            <Link to="/createguide">Create Guide</Link>
                        </li>
                        <li>
                            <Link to="/guides">Guides</Link>
                        </li>
                        </>
                        :
                        <>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        </>
                    }
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;