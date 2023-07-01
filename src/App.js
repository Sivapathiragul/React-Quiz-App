import React, { useState } from 'react'
import "./App.css";

function App()
{
  const question=[
    {questiontext: "Who is Making the Web standards?",
     answerOptions: [ {answerText:"Mozilla", isCorrect:false},
                      {answerText:"Google", isCorrect:false},
                      {answerText:"The World Wide Web Consortium", isCorrect:true},
                      {answerText:"Microsoft", isCorrect:false},
                    ]
    },
    {questiontext: "Choose the correct HTML element for the largest heading:",
     answerOptions: [ {answerText:"<head>", isCorrect:false},
                      {answerText:"<h1>", isCorrect:true},
                      {answerText:"<heading>", isCorrect:false},
                      {answerText:"<bold>", isCorrect:false},
                    ]
    },
    {questiontext: "Chodse the correct HTML element for define important text:",
     answerOptions: [ {answerText:"<b>", isCorrect:false},
                      {answerText:"<i>", isCorrect:false},
                      {answerText:"<strong>", isCorrect:true},
                      {answerText:"<important>", isCorrect:false},
                    ]
    },
    {questiontext: "Chodse the correct HTML element for define emphasized text:",
     answerOptions: [ {answerText:"<i>", isCorrect:false},
                      {answerText:"<italic>", isCorrect:false},
                      {answerText:"<b>", isCorrect:false},
                      {answerText:"<em>", isCorrect:true},
                    ]
    },
    {questiontext: "What is the correct HTML for making a Drop-down list?",
      answerOptions: [  {answerText:"<input type=list>", isCorrect:false},
                        {answerText:"<select>", isCorrect:true},
                        {answerText:"<list>", isCorrect:false},
                        {answerText:"<input type=dropdown>", isCorrect:false},
                      ]
    },
    {questiontext: "Which input type defines a slider Control?",
      answerOptions: [  {answerText:"range", isCorrect:true},
                        {answerText:"slider", isCorrect:false},
                        {answerText:"controls", isCorrect:false},
                        {answerText:"search", isCorrect:false},
                      ]
    },
    {questiontext: "Which HTML element is used to display a scalar measurement within a range?",
      answerOptions: [{answerText:"<measure>", isCorrect:false},
                      {answerText:"<gauge>", isCorrect:false},
                      {answerText:"<meter>", isCorrect:true},
                      {answerText:"<range>", isCorrect:false},
                      ]
    },
    {questiontext: "How can you make a numbered list?",
      answerOptions: [{answerText:"<ul>", isCorrect:false},
                      {answerText:"<ol>", isCorrect:true},
                      {answerText:"<list>", isCorrect:false},
                      {answerText:"<dl>", isCorrect:false},
                      ]
    },
    {questiontext: "In HTML, Which attribute is used to specify that an input filed must be filled out?",
      answerOptions: [{answerText:"formvalidate", isCorrect:false},
                      {answerText:"placeholder", isCorrect:false},
                      {answerText:"validate", isCorrect:false},
                      {answerText:"required", isCorrect:true},
                      ]
    },
    {questiontext: "The HTML <canvas> element is used to:",
      answerOptions: [{answerText:"manipulate data in MySQL", isCorrect:false},
                      {answerText:"draw graphics", isCorrect:true},
                      {answerText:"create draggable elements", isCorrect:false},
                      {answerText:"display database records", isCorrect:false},
                      ]
    },                    
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0) 

  const BottonClick = (isCorrect) => {
  
    if(isCorrect === true){
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;
    if(nextQuestions < question.length){
      setCurrentQuestion(nextQuestions);
    }
    else {
      setShowScore(true)
    }
  }
  
  return(
    <>
      <h1 className='head'>Quiz</h1>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            Your Score {score} out of {question.length}
            </div>
         ):
         (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}/</span>
                  {question.length}
                </div>

                <div className='question-text'>
                  {question[currentQuestion].questiontext}
                </div>
              </div>
                <div className='answer-section'>
                  {
                    question[currentQuestion].answerOptions.map((answerOptions) =>
                    (
                      <button onClick={() => BottonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                    )
                    )
                  }
                </div>
            </>
          )
        }
      </div>
    </>
  );
}


export default App