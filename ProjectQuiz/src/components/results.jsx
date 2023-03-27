import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./results.css";
import { QuizContext } from "./context";

function Results(props) {
  const { data, setGameStart } = useContext(QuizContext);
  useEffect(() => {
    setGameStart(false);
  }, []);

  return (
    <>
      <h1>Results</h1>
      <h2>
        You had {props.correctAnswer} correct out of {props.amountOfAnswers}!
      </h2>
      <p>(visa alla frågor och de korrekta/inkorrekta svaren)</p>
      <Link to="/">Play again</Link>
    </>
  );
}

export default Results;
