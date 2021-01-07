import NavBar from '../NavBar/NavBar';

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <h1>League Elite</h1>
            <NavBar />
        </header>
    )
}

export default Header;