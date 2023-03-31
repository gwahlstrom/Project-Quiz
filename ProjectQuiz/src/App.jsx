import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import QuizGame from "./components/quizgame";
import Start from "./components/start";
import Categories from "./components/categories";
import NotFound from "./components/404";
import { useEffect, useState } from "react";
import Intro from "./components/intro";
import BackgroundMusic from "./components/Music/BackgroundMusic";

function App() {
  const [introActive, setIntroActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroActive(true);
    }, 3000);
  }, []);

  return (
    <div className="wrapper">
      {!introActive ? <Intro /> : null}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quizgame" element={<QuizGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackgroundMusic />
      <Footer />
    </div>
  );
}

export default App;
