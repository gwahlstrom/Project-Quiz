import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./results.css";
import { QuizContext } from "./context";

function Results(props) {
  const { data, setGameStart } = useContext(QuizContext);

  useEffect(() => {
    setGameStart(false);
  }, []);

  const results = data.map((item, index) => {
    const indexCorrectAnswer = props.possibleAnswers[index].findIndex(
      (el) => el === item.correctAnswer
    );
    return (
      <div className="QandA" key={index}>
        <h4>
          {item.question} -{" "}
          {props.userAnswers[index] === item.correctAnswer
            ? "Correct!"
            : "Wrong answer"}
        </h4>

        <div className="answers">
          {props.possibleAnswers[index].map((answer, indexAnsw) => {
            return (
              <p
                className={indexAnsw === indexCorrectAnswer ? "green" : "red"}
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
    <div className="results-wrapper">
      <h1>Results</h1>
      <h2>
        You had {props.correctAnswer} correct out of {props.amountOfAnswers}!
      </h2>
      <p>(visa alla frågor och de korrekta/inkorrekta svaren)</p>
      {results}
      <Link to="/">Play again</Link>
    </div>
  );
}

export default Results;
