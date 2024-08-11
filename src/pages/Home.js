import { useState } from "react";
import Calendar from "react-calendar";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "react-calendar/dist/Calendar.css";
import styles from "./Home.module.css";

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todos, setTodos] = useState({});
    const [newTodo, setNewTodo] = useState("");

    const currentDate = selectedDate.toDateString();

    const onDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTodoChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = () => {
        if (newTodo.trim() === "") return;

        const currentTodos = todos[currentDate] || [];
        setTodos({
            ...todos,
            [currentDate]: [...currentTodos, newTodo],
        });
        setNewTodo("");
    };

    return (
        <div className="container">
            <Header />
            <div className={styles.home}>
                <Calendar onChange={onDateChange} />
                <div className={styles.todo}>
                    <div>
                        <input type="text" value={newTodo} onChange={handleTodoChange} placeholder="새 todo를 입력해주세요" />
                        <button onClick={addTodo}>추가</button>
                    </div>
                    <div className={styles.todo__list}>
                        <ul>
                            {(todos[currentDate] || []).map((todo, index) => (
                                <li key={index}>{todo}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <NavBar />
        </div>
    );
};

export default Home;
