import { useContext, useEffect, useState } from "react";
import Results from "./results";
import "./quizgame.css";
import { QuizContext } from "./context";
import { Link } from "react-router-dom";
import ProgressBar from "./progressbar";

function QuizGame() {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState(null);
  const [progress, setProgress] = useState(0); // for progress bar

  const { data, setGameStart } = useContext(QuizContext);

  //for progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);
  ///////////

  const clickHandler = (event) => {
    if (data[count].correctAnswer === event.target.innerHTML) {
      setUserAnswers([...userAnswers, event.target.innerHTML]);
      setCorrect(correct + 1);
    }
    setUserAnswers([...userAnswers, event.target.innerHTML]);
    setCount(count + 1);
  };

  useEffect(() => {
    if (data[count] && count < 10) {
      const answersArray = [...data[count].incorrectAnswers, data[count].correctAnswer];
      answersArray.sort(() => Math.random() - 0.5);
      const answersButton = answersArray.map((answer, index) => {
        return (
          <button className="answerBtn" onClick={(e) => clickHandler(e)} key={index}>
            {answer}
          </button>
        );
      });
      if (allAnswers != null) {
        setAllAnswers((prev) => [...prev, answersArray]);
      } else {
        setAllAnswers([answersArray]);
      }
      setAnswers(answersButton);
    }
  }, [count, data]);

  if (count >= 0 && count < 10) {
    return (
      <div className="question-wrapper">
        <div className="main-questions">
          <div className="imageDiv">
            <p>{data[count].category}</p>
          </div>

          {data[count] ? (
            <>
              <div className="questionAndProgress">
                <div className="question">
                  <h3>{data[count].question}</h3>
                </div>
                <div>
                  <ProgressBar completed={progress}></ProgressBar>
                </div>
              </div>
            </>
          ) : (
            <p>loading...</p>
          )}
          <div className="answersdiv">{answers}</div>
        </div>
        <div className="cancel">
          <Link to="/">Cancel</Link>
        </div>
      </div>
    );
  } else if (count === 10) {
    return (
      <>
        <div className="resultsContainer">
          <Results
            userAnswers={userAnswers}
            possibleAnswers={allAnswers}
            correctAnswer={correct}
            amountOfAnswers={data.length}
            fetchedData={data}
          />
        </div>
      </>
    );
  }
}

export default QuizGame;
