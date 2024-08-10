import Calendar from "react-calendar";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "react-calendar/dist/Calendar.css";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className={styles.home}>
                <Calendar />
            </div>
            <NavBar />
        </div>
    );
};

export default Home;
