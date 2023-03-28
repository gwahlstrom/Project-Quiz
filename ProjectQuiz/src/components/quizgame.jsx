import { useContext, useEffect, useState } from "react";
import Results from "./results";
import "./quizgame.css";
import { QuizContext } from "./context";
import { Link } from "react-router-dom";

function QuizGame() {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState(null);
  const [correct, setCorrect] = useState(0);

  const { data, setGameStart } = useContext(QuizContext);

  const clickHandler = (event) => {
    if (data[count].correctAnswer === event.target.innerHTML) {
      setCorrect(correct + 1);
    }
    setCount(count + 1);
  };

  //   useEffect(() => {
  //     setGameStart(true);
  //   }, []);

  useEffect(() => {
    if (data[count] && count < 10) {
      const answersArray = [
        ...data[count].incorrectAnswers,
        data[count].correctAnswer,
      ];
      answersArray.sort(() => Math.random() - 0.5);
      const answersButton = answersArray.map((answer, index) => {
        return (
          <button onClick={(e) => clickHandler(e)} key={index}>
            {answer}
          </button>
        );
      });
      setAnswers(answersButton);
    }
  }, [count, data]);

  if (count >= 0 && count < 10) {
    return (
      <div className="question-wrapper">
        {data[count] ? (
          <div className="question">
            <h3>
              {data[count].question}
              {data[count].category}
            </h3>
          </div>
        ) : (
          <p>loading...</p>
        )}
        <div className="answersdiv">{answers}</div>
        <Link to="/">Cancel</Link>
      </div>
    );
  } else if (count === 10) {
    return (
      <>
        <Results
          correctAnswer={correct}
          amountOfAnswers={data.length}
          fetchedData={data}
        />
      </>
    );
  }
}

export default QuizGame;
