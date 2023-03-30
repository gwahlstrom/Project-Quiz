import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { QuizContext } from "./context";
import "./start.css";

function Start() {
  const {
    NO_OF_HIGH_SCORES,
    HIGH_SCORES,
    highScoreString,
    highScores,
    nickName,
    setNickName,
  } = useContext(QuizContext);

  const [inputField, setInputField] = useState("");

  function showHighScores() {
    return highScores.map((score, index) => {
      return (
        <li key={index}>
          {score.name} -{score.score} points
        </li>
      );
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nickName);
    setInputField("");
  }

  return (
    <div className="start-wrapper">
      <div className="main">
        <h1>The Quiz Game</h1>
        <div className="startHighscoreWrapper">
          <div className="start">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nickname"
                value={inputField}
                onChange={(event) => {
                  setInputField(event.target.value);
                  setNickName(event.target.value);
                }}
                placeholder="Enter your nickname.."
              />
              <button type="submit">Join</button>
            </form>
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
