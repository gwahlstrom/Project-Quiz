import { Link } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import "./results.css";
import { QuizContext } from "./context";
import Confetti from "react-confetti";

function Results(props) {
  const { data, setGameStart, setTimer } = useContext(QuizContext);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  useEffect(() => {
    setGameStart(false);
  }, []);

  const results = data.map((item, index) => {
    const indexCorrectAnswer = props.possibleAnswers[index].findIndex(
      (el) => el === item.correctAnswer
    );
    return (
      <div className="resultsQuestion" key={index}>
        <div className="wrongOrRightDiv">
          <h2>
            {props.userAnswers[index] === item.correctAnswer
              ? "Correct answer"
              : "Wrong answer"}
          </h2>
        </div>
        <div className="resultQuestionsDiv">
          <h4>
            Question {index + 1}: {item.question}
          </h4>
        </div>

        <div className="resultsAnswer">
          {props.possibleAnswers[index].map((answer, indexAnsw) => {
            return (
              <p
                className={
                  indexAnsw === indexCorrectAnswer
                    ? "correctAnswerColor"
                    : "incorrectAnswerColor"
                }
                key={answer}
              >
                {answer}
              </p>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="results-wrapper" ref={confetiRef}>
      <Confetti numberOfPieces={150} width={width} height={height} />
      <div className="resultsInfo">
        <h1>Results</h1>
        <h2>
          You had {props.correctAnswer} correct out of {props.amountOfAnswers}!
        </h2>
      </div>
      <div className="resultsScrollBox">{results}</div>
      <div className="playAgainDiv">
        <Link to="/" className="playAgainBtn">
          Play again
        </Link>
      </div>
    </div>
  );
}

export default Results;
