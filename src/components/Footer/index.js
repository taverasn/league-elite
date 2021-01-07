import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <p>Copyright &copy; All rights reserved {new Date().getFullYear()} League Elite</p>
        </footer>
    );
};

export default Footer;