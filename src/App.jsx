
import './App.css';
import quizData from './quizData';
import { useState } from 'react';


function App() {
const [options, setOptions] = useState("");
const [Correct, setCorrect] = useState("null");
const [ currentQuestion, setcurrentQuestion] = useState(0);
const handleclickOption = (option) => {
  setOptions(option);
  setCorrect(option === quizData[Questions].answer
  );
}

return(
  <>
  <h1 className="heading">Welcome to Quiz-Game</h1>
    <div className="questions">
 <h2>{quizData[0].question}</h2>

  {quizData[0].options.map((option, index) => (
    (<li>
     <button onClick={() => handleclickOption(option)}>{option}</button>
    </li>)))
  }
  {setOptions[currentQuestion] && (
<p>
{Correct ? "Good job!" : "Sorry"}</p>
  )}
<h2>{quizData[1].question}</h2>

  {quizData[1].options.map((option, index) => (
    (<li>
     <button className="btn" onClick={() => handleclickOption(option)}>{option}</button>
    </li>)))
  }
  {setOptions[currentQuestion] && (
<p>
{Correct ? "Good job!" : "Sorry"}</p>
  )}

    </div>
 
    {/* <div className="questions">
      <h2>{quizData[1].question}</h2>
    </div>
    <div className="questions">  
        <h2 >{quizData[2].question}</h2>
    </div>
     <div className="questions">  
        <h2>{quizData[3].question}</h2>
    </div>
     <div className="questions">  
        <h2>{quizData[4].question}</h2>
    // </div> */}
    </>
  );
}

export default App;
