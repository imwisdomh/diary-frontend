import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import styles from "./Friend.module.css";

const Friend = () => {
    return (
        <div className="container">
            <Header />
            <div className={styles.friend}>
                <div className={styles["friend__search"]}>
                    <div className={styles["friend__search-input"]}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                        <input type="text" placeholder="친구 검색" />
                    </div>
                    <div className={styles["friend__search-result"]}>
                        <ul>
                            <li>
                                <Profile
                                    username="Kim Cheolsu"
                                    bio="아이 엠 그라운드 자기소개 하기"
                                    avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                />
                            </li>
                            <li>
                                <Profile
                                    username="Kim Minji"
                                    avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles["friend__requests"]}>
                    <span>친구 요청</span>
                    <div className={styles["friend__request-status"]}>
                        <div className={styles["friend__request-sent"]}>
                            <span>보냄</span>
                            <ul>
                                <li>
                                    <Profile
                                        username="Kim Cheolsu"
                                        bio="아이 엠 그라운드 자기소개 하기"
                                        avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                                <li>
                                    <Profile
                                        username="Kim Minji"
                                        avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={styles["friend__request-received"]}>
                            <span>받음</span>
                            <ul>
                                <li>
                                    <Profile
                                        username="Lee Cheolsu"
                                        bio="아이 엠 그라운드 자기소개 하기"
                                        avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                                <li>
                                    <Profile
                                        username="Lee Minji"
                                        avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles["friend__friends-list"]}>
                    <span>친구 목록</span>
                    <ul>
                        <li>
                            <Profile
                                username="Park Cheolsu"
                                bio="아이 엠 그라운드 자기소개 하기"
                                avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                            />
                        </li>
                        <li>
                            <Profile
                                username="Park Minji"
                                avatar="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <NavBar />
        </div>
    );
};

export default Friend;
