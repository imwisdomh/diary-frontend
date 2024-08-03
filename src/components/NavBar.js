import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__btn">
                    <Link className="nav__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__link" to="/friend">
                        Friend
                    </Link>
                </li>
                <li className="nav__btn">
                    <Link className="nav__link" to="/my-page">
                        My Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
