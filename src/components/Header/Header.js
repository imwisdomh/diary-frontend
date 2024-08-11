import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
            case "/my-page":
                return "My Page";
            case "/friend":
                return "Friend";
            case "/":
            default:
                return "Home";
        }
    };

    return (
        <div className={styles.header}>
            <h1 className={styles.header__title}>{getTitle(location.pathname)}</h1>
        </div>
    );
};

export default Header;
