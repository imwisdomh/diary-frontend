import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Friend from "./pages/Friend";
import MyPage from "./pages/MyPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/friend" element={<Friend />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
        </Router>
    );
};

export default App;
