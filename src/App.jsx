
import './App.css';
import quizData from './quizData';
import { useState } from 'react';


function App() {

return(
  <>
    <div className="App">
 <h2>{quizData[0].question}</h2>
 
    </div>
    <div>
      <h2>{quizData[1].question}</h2>
    </div>
    <div>  
        <h2>{quizData[2].question}</h2>
    </div>
     <div>  
        <h2>{quizData[3].question}</h2>
    </div>
     <div>  
        <h2>{quizData[4].question}</h2>
    </div>
    </>
  );
}

export default App;
