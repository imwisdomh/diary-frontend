import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import styles from "./Friend.module.css";
import users from "../data/users.json";

const Friend = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const results = users.filter(
                (user) =>
                    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.id.toString().includes(searchTerm)
            );
            setFilteredUsers(results);
        } else {
            setFilteredUsers([]);
        }
    }, [searchTerm]);

    return (
        <div className="container">
            <Header />
            <div className={styles.friend}>
                <div className={styles["friend__search"]}>
                    <div className={styles["friend__search-input"]}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                        <input
                            type="text"
                            placeholder="친구 검색"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className={styles["friend__search-result"]}>
                        <ul>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <li key={user.id}>
                                        <Profile username={user.username} bio={user.bio} avatar={user.avatar} />
                                    </li>
                                ))
                            ) : (
                                <li>검색 결과가 없습니다.</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles["friend__requests"]}>
                    <span>친구 요청</span>
                    <div className={styles["friend__request-status"]}>
                        <div className={styles["friend__request-sent"]}>
                            <span>보냄</span>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <div className={styles["friend__request-received"]}>
                            <span>받음</span>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles["friend__friends-list"]}>
                    <span>친구 목록</span>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <NavBar />
        </div>
    );
};

export default Friend;
