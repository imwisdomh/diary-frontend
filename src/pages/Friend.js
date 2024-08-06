import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import styles from "./Friend.module.css";

const Friend = () => {
    return (
        <div className="container">
            <Header />
            <div className={styles.friend}>
                <div className={styles.friend__search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    <input type="text" placeholder="친구 검색" />
                </div>
                <div className={styles.friend__request}>
                    <span>친구 요청</span>
                    <div className={styles.friend__status}>
                        <div className={styles.friend__sent}>
                            <span>보냄</span>
                            <ul>
                                <li>
                                    <Profile
                                        username="Kim Cheolsu"
                                        bio="아이 엠 그라운드 자기소개 하기"
                                        img="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                                <li>
                                    <Profile
                                        username="Kim Minji"
                                        img="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={styles.friend__received}>
                            <span>받음</span>
                            <ul>
                                <li>
                                    <Profile
                                        username="Lee Cheolsu"
                                        bio="아이 엠 그라운드 자기소개 하기"
                                        img="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                                <li>
                                    <Profile
                                        username="Lee Minji"
                                        img="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.friend__list}>
                    <span>친구 목록</span>
                    <ul>
                        <li>
                            <Profile
                                username="Park Cheolsu"
                                bio="아이 엠 그라운드 자기소개 하기"
                                img="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
                            />
                        </li>
                        <li>
                            <Profile
                                username="Park Minji"
                                img="https://avatars.githubusercontent.com/u/150656382?s=400&v=4"
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
