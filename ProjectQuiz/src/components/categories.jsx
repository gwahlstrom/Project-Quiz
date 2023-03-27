import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./categories.css";
import { QuizContext } from "./context";

function Categories() {
  const quizContext = useContext(QuizContext);
  const { setDifficulty, setCategory, setGameStart, category, difficulty, loading } =
    useContext(QuizContext);

  const clickHandler = (event) => {
    setCategory(event.target.name);
  };

  const clickHandlerDif = (event) => {
    setDifficulty(event.target.name);
  };

  useEffect(() => {
    if (category && difficulty) {
      setGameStart(true);
    }
  }, [category, difficulty]);

  return (
    <>
      <Link to="/">Back</Link>
      <h1>THIS IS CATEGORIES</h1>
      <button onClick={(e) => clickHandlerDif(e)} name="easy">
        Easy
      </button>
      <button onClick={(e) => clickHandlerDif(e)} name="medium">
        Medium
      </button>
      <button onClick={(e) => clickHandlerDif(e)} name="hard">
        Hard
      </button>
      <button onClick={(e) => clickHandler(e)} name="arts_and_literature">
        Arts & Literature
      </button>
      <button onClick={(e) => clickHandler(e)} name="film_and_tv">
        Film & TV
      </button>
      <button onClick={(e) => clickHandler(e)} name="food_and_drink">
        Food & Drink
      </button>
      <button onClick={(e) => clickHandler(e)} name="sport_and_leisure">
        Sport And Leisure
      </button>
      <button onClick={(e) => clickHandler(e)} name="general_knowledge">
        General Knowledge
      </button>
      <button onClick={(e) => clickHandler(e)} name="society_and_culture">
        Society & Culture
      </button>
      <button onClick={(e) => clickHandler(e)} name="science">
        Science
      </button>
      <button onClick={(e) => clickHandler(e)} name="music">
        Music
      </button>
      <button onClick={(e) => clickHandler(e)} name="history">
        History
      </button>
      <button onClick={(e) => clickHandler(e)} name="geography">
        Geography
      </button>
      <button onClick={(e) => clickHandler(e)} name="random">
        Random(Not working)
      </button>
      <button onClick={(e) => clickHandler(e)} name="mixed">
        Mixed(Not working)
      </button>
      {loading ? <p>loading...</p> : <Link to="/quizgame">Start</Link>}
    </>
  );
}

export default Categories;
