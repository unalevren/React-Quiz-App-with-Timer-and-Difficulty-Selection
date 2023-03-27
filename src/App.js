import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Intro from "./pages/intro/Intro";
import Quiz from "./pages/quiz/Quiz";

const App = () => {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Intro />}
                    />
                    <Route
                        path="/quiz/:difficulty/:amount"
                        element={<Quiz />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
