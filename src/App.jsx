import "./App.css";
import quizData from "./quizData";
import { useState } from "react";
import React from "react";

// useState because I need these to show questions, score, answer, next question
function App() {
  const [options, setOptions] = useState("");
  const [correct, setCorrect] = useState(null);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // choosing one question
  function handleclickOption  (option) {
    setOptions(option);
    const isCorrect = option === quizData[currentQuestion].answer;
    setCorrect(isCorrect);
    if (isCorrect) setScore(score + 1);
  };
// next question after choosing an answer, whether its right or wrong
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
  // to take the game back to first question
  function handleplayAgain() {    
      setScore(0);
    setcurrentQuestion(0);
    setOptions("");
    setCorrect(null);
    setShowScore(false);
    };

  return (
    <>
      <h1 className="heading">Welcome to Quiz-Game</h1>
      <div className="questions">
        
        {showScore ? (
          <h2 className="score"> 
            You got {score} / {quizData.length} !!
            <button className="btn"
             onClick={handleplayAgain}>
              Play again
              </button>
          </h2>
        ) : ( 
          <>
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
