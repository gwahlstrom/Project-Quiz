import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import QuizGame from "./components/quizgame";
import Start from "./components/start";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quizgame" element={<QuizGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
