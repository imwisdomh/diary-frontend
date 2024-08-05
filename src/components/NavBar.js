import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__btn">
                    <Link className="nav__link" to="/">
                        <FontAwesomeIcon icon={faHouse} size="lg" />
                        Home
                    </Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__link" to="/friend">
                        <FontAwesomeIcon icon={faUserGroup} size="lg" />
                        Friend
                    </Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__link" to="/my-page">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                        My Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
