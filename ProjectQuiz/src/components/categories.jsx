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
    console.log(event.target);
  };

  const clickHandlerDif = (event) => {
    setDifficulty(event.target.name);
    console.log(event.target);
  };

  useEffect(() => {
    if (category && difficulty) {
      setGameStart(true);
    }
  }, [category, difficulty]);

  return (
    <>
      <div className="container">
        <div className="categories-wrapper">
          <div className="difficulty">
            <Link to="/" className="backBtn">
              <img src="arrow-left.svg" alt="back arrow icon" id="back" />
              BACK
            </Link>
            <div className="dif-button-container">
              <button className="diff-button" onClick={(e) => clickHandlerDif(e)} name="easy">
                EASY
                <img src="circle-easy.svg" alt="easy circle icon" />
              </button>
              <button className="diff-button" onClick={(e) => clickHandlerDif(e)} name="medium">
                MEDIUM
                <img src="circle-medium.svg" alt="medium circle icon" />
              </button>
              <button className="diff-button" onClick={(e) => clickHandlerDif(e)} name="hard">
                HARD
                <img src="circle-hard.svg" alt="hard circle icon" />
              </button>
            </div>
          </div>
          <div className="categories-container">
            <div className="categories">
              <button
                className="box"
                onClick={(e) => clickHandler(e)}
                name="arts_and_literature"
                id="arts"
              >
                <div className="insideContainer">
                  ARTS & LITERATURE
                  <img src="arts.svg" alt="arts icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="film_and_tv">
                <div className="insideContainer">
                  FILM & TV
                  <img src="film_and_tv.svg" alt="film and tv icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="food_and_drink">
                <div className="insideContainer">
                  FOOD & DRINK
                  <img src="food_and_drink.svg" alt="food and drink icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="sport_and_leisure">
                <div className="insideContainer">
                  SPORTS & LEISURE
                  <img src="sports.svg" alt="sports and leisure icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="general_knowledge">
                <div className="insideContainer">
                  GENERAL KNOWLEDGE
                  <img src="general.svg" alt="general knowledge icon" id="generalIcon" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="society_and_culture">
                <div className="insideContainer">
                  SOCIETY & CULTURE
                  <img src="society.svg" alt="society and culture icon" id="societyIcon" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="science">
                <div className="insideContainer">
                  SCIENCE
                  <img src="science.svg" alt="science icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="music">
                <div className="insideContainer">
                  MUSIC
                  <img src="music.svg" alt="music icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="history">
                <div className="insideContainer">
                  HISTORY
                  <img src="history.svg" alt="history icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="geography">
                <div className="insideContainer">
                  GEOGRAPHY
                  <img src="geography.svg" alt="geography icon" id="categoryIcons" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="random">
                <div className="insideContainer">
                  RANDOM (not working)
                  <img src="random.svg" alt="random selection icon" id="randomIcon" />
                </div>
              </button>
              <button className="box" onClick={(e) => clickHandler(e)} name="mixed">
                <div className="insideContainer">
                  MIXED
                  <img src="mixed.svg" alt="mixed selection icon" id="categoryIcons" />
                </div>
              </button>
            </div>
            {loading ? (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Link to="/quizgame" className="startBtn">
                <img src="play-fill.svg" alt="play icon" id="play" /> START
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
