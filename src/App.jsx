import "./App.css";
import quizData from "./quizData";
import { useState } from "react";
import React from "react";

function App() {
  const [options, setOptions] = useState("");
  const [correct, setCorrect] = useState(null);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleclickOption = (option) => {
    setOptions(option);
    const isCorrect = option === quizData[currentQuestion].answer;
    setCorrect(isCorrect);
    if (isCorrect) setScore(score + 1);
  };

  function handlenextQuestion() {
    const next = currentQuestion + 1;

    if (next < quizData.length) {
      setcurrentQuestion(next);
      setOptions("");
      setCorrect(null);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
      <h1 className="heading">Welcome to Quiz-Game</h1>
      <div className="questions">
        {showScore ? (
          <h2>
            {score} / {quizData.length}
          </h2>
        ) : (
          <>
            <h2>{quizData[currentQuestion].question}</h2>

            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn"
                onClick={() => handleclickOption(option)}
              >
                {option}
              </button>
            ))}
            {options && <p>{correct ? "Good job!" : "Sorry"}</p>}
            <button onClick={handlenextQuestion} disabled={!options}>
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
