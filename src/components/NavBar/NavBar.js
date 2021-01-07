import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='/create-guide' className='NavBar-link'>Create Guide</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>Log In</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>Sign Up</Link>
        </div>;

    return (
        <div className='Navbar'>
            {nav}
        </div>
    );
};

export default NavBar;