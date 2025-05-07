
import './App.css';
import quizData from './quizData';
// import { useState } from 'react';


function App() {

return(
    <div className="App">
 <h2>{quizData.question}</h2>
 <ul>
        {quizData.options.map((option, index) => (
          <li key={index}>{option}</li> ))}
          </ul>
    </div>
  );
}

export default App;
