import { createContext, useContext, useState, useEffect } from "react";

export const QuizContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(false);

  // https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10&difficulty=easy

  let url = "";
  const generateURL = () => {
    if (category && difficulty) {
      url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=10&difficulty=${difficulty}`;
      setGameStart(true);
    } else {
      url = "https://the-trivia-api.com/api/questions?limit=10";
      setGameStart(true);
    }
    console.log(url);
    return url;
  };

  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (gameStart) {
      generateURL();
      fetchData();
    }
  }, [gameStart]);

  const values = { setGameStart, setDifficulty, data, setCategory, category, difficulty, loading };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};
