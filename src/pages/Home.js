import Calendar from 'react-calendar';
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <Calendar />
            <NavBar />
        </div>
    );
};

export default Home;
