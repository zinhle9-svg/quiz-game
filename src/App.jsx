import "./App.css";
import quizData from "./quizData";
import { useState } from "react";
import React from "react";

// realised that react line needs to be there for my code to run?
// useState because I need these to show questions, score, answer, next question
function App() {
  const [options, setOptions] = useState("");
  const [correct, setCorrect] = useState(null);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // choosing one question
 function handleclickOption(option) {
  const isCorrect = option === quizData[currentQuestion].answer;

  if (isCorrect) {
    setScore((prevScore) => prevScore + 1);
  }
  console.log(score);
  // next question after choosing an answer, whether its right or wrong

  const next = currentQuestion + 1;

  if (next < quizData.length) {
    setcurrentQuestion(next);
  } else {
    setShowScore(true);
  }
}
  // to take the game back to first question
  function handleplayAgain() {
    setScore(0);
    setcurrentQuestion(0);
    setOptions("");
    setCorrect(null);
    setShowScore(false);
  }

  return (
    <div className="quiz">
      <h1 className="heading">Welcome to Quiz-Game</h1>

      {showScore ? (
        <h2 className="score">
          You got {score} / {quizData.length} !!
          <button className="btn" onClick={handleplayAgain}>
            Play again
          </button>
        </h2>
      ) : (
        <div className="qtn">
          {/* showing questions */}
          <h2>{quizData[currentQuestion].question}</h2>
          {/* showing options i  button form that is clickable*/}
          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => handleclickOption(option)}
            >
              {option}
            </button>
          ))}
          {/* {options && <p>{correct ? "Good job! 😃" : "Sorry! 😪"}</p>}
          <button onClick={handleclickOption} disabled={!options}>
            Next
          </button> */}
        </div>
      )}
    </div>
  );
}

export default App;
