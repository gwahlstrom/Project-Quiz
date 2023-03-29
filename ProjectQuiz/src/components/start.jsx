import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "./context";
import "./start.css";

function Start() {
  const { NO_OF_HIGH_SCORES, HIGH_SCORES, highScoreString, highScores } =
    useContext(QuizContext);

  function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementsByClassName("highscore");
    return (highScoreList.innerHTML = highScores.map((score, index) => {
      return (
        <li key={index}>
          {score.name} -{score.score} points
        </li>
      );
    }));
  }

  return (
    <div className="start-wrapper">
      <div className="main">
      
        <h1>The Quiz Game</h1>
        <div className="startHighscoreWrapper">
          <div className="start">
            <input type="text" placeholder="Enter your nickname.." />
            <Link to="/categories">FREE PLAY</Link>
            <a href="#">DAILY CHALLENGE</a>
          </div>
          <div className="highscore">
            <p>Highscore</p>
            <ol>{showHighScores()}</ol>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Start;
