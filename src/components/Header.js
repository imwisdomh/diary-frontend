import { useLocation } from "react-router-dom";

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
        <div className="header">
            <h1 className="header__title">{getTitle(location.pathname)}</h1>
        </div>
    );
};

export default Header;
