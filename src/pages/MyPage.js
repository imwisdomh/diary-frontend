import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import users from "../data/users.json";

const MyPage = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(users[0]);
    }, []);

    if (!currentUser) return null;

    return (
        <div className="container">
            <Header />
            <div className="my-page">
                <Profile username={currentUser.username} bio={currentUser.bio} avatar={currentUser.avatar} />
            </div>
            <NavBar />
        </div>
    );
};

export default MyPage;
