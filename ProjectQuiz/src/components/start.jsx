import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { QuizContext } from "./context";
import "./start.css";

function Start() {
  const { NO_OF_HIGH_SCORES, HIGH_SCORES, highScoreString, highScores, nickName, setNickName } =
    useContext(QuizContext);

  const [inputField, setInputField] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function showHighScoresNames() {
    return highScores.map((score, index) => {
      return <li key={index}>{score.name}</li>;
    });
  }
  function showHighScores() {
    return highScores.map((score, index) => {
      return <li key={index}>{score.score}</li>;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nickName);
    setSubmitted(!submitted);
    setInputField("");
  }

  return (
    <div className="start-wrapper">
      <div className="main">
        <img
          src="dailyquizine-logo-cropped.png"
          alt="Daily Quizine logotype"
          className="logotypeStart"
        />
        <div className="startHighscoreWrapper">
          <div className="start">
            <div className="startInputForm">
              <form onSubmit={handleSubmit}>
                <div className="startInputEl">
                  <input
                    type="text"
                    name="nickname"
                    value={inputField}
                    onChange={(event) => {
                      setInputField(event.target.value);
                      setNickName(event.target.value);
                    }}
                    placeholder="Enter nickname.."
                  />
                </div>
                <div className="startSubmitAndBtn">
                  {!submitted ? (
                    <button type="submit" className="startSubmitButton">
                      JOIN
                    </button>
                  ) : (
                    <img
                      src="check-lg.svg"
                      alt="submit icon checkmark"
                      className="submitCheckmarkImg"
                    />
                  )}
                </div>
              </form>
            </div>
            <div className="startStartButtons">
              <Link to="/categories" id="playMusic">
                FREE PLAY
              </Link>
              <Link to="/daily">CHALLENGE</Link>
            </div>
          </div>
          <div className="highscore">
            <div className="insideHighscore"></div>
            <h2>High Score</h2>
            <div className="highscoreNamePoints">
              <p>Name</p>
              <p>Points</p>
            </div>
            <div className="scoreWrapper">
              <ol className="highscoreList">{showHighScoresNames()}</ol>
              <div className="highscorePoints">{showHighScores()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
