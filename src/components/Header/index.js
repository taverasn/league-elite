import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = (props) => {

    // let nav = props.user ?
    // <div>
    //     <Link to='/create-guide' className={styles.NavBarLink}>Create Guide</Link>
    //     <Link to='' className={styles.NavBarLink} onClick={props.handleLogout}>Log Out</Link>
    // </div>
    // :
    // <div>
    //     <Link to='/login' className={styles.NavBarLink}>Log In</Link>
    //     <Link to='/signup' className={styles.NavBarLink}>Sign Up</Link>
    // </div>;

    return (
        <header className={styles.Header}>
            <Link to="/">
                <h1>League Elite</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/logout">Log Out</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;