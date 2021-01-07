import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = (props) => {

    let nav = props.user ?
    <div>
        <Link to='/create-guide' className={styles.NavBarLink}>Create Guide</Link>
        <Link to='' className={styles.NavBarLink} onClick={props.handleLogout}>Log Out</Link>
    </div>
    :
    <div>
        <Link to='/login' className={styles.NavBarLink}>Log In</Link>
        <Link to='/signup' className={styles.NavBarLink}>Sign Up</Link>
    </div>;

    return (
        <header className={styles.Header}>
            <h1>League Elite</h1>
            <nav>
                <ul>
                    <li>Sign Up</li>
                    <li>Login</li>
                    <li>Log Out</li>
                    <li>DashBoard</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;