import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import QuizGame from "./components/quizgame";
import Start from "./components/start";
import Categories from "./components/categories";
import NotFound from "./components/404";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quizgame" element={<QuizGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
