import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = (props) => {

    return (
        <header className={styles.Header}>
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
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
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
        </header>
    );
};

export default Header;