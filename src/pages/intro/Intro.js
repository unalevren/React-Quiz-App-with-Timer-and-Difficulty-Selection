import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Selects from "../../components/select/Selects";

const Intro = () => {
    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState("");
    const navigate = useNavigate();
    const totalQuestions = 10;

    const startQuiz = () => {
        if (difficultyChange) navigate(`/quiz/${difficultyChange}/${totalQuestions}`);
    };
    return (
        <div className="intro">
            <div className="intro-container">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Bkx-bV8Y7oosGWM6rxIzAZdNyqNw1QaZKw&usqp=CAU"
                    alt=""
                />
                <Selects
                    data={difficulty}
                    setDifficultyChange={setDifficultyChange}
                />

                <div
                    onClick={startQuiz}
                    className="intro-btn">
                    Start Quiz
                </div>
            </div>
        </div>
    );
};

export default Intro;
