import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__btn}>
                    <Link className={styles.nav__link} to="/">
                        <FontAwesomeIcon icon={faHouse} size="lg" />
                        Home
                    </Link>
                </li>
                <li className={styles.nav__btn}>
                    <Link className={styles.nav__link} to="/friend">
                        <FontAwesomeIcon icon={faUserGroup} size="lg" />
                        Friend
                    </Link>
                </li>
                <li className={styles.nav__btn}>
                    <Link className={styles.nav__link} to="/my-page">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        My Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
