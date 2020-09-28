import React, {useState } from 'react';
import './App.css';

function App() {
  // create our questions
  // we will do this in a form of an array
  const qq = [
    {
      q_text: 'What is Python?',
      quiz_answer: [
        {answerOptions: 'A Snake', isCorrect: false},
        {answerOptions: 'A coding language', isCorrect: true},
        {answerOptions: 'A game', isCorrect: false},
        {answerOptions: 'IDK...', isCorrect: false},
      ],
    },
    // {
    //   q_text: 'What is Python?',
    //   quiz_answer: [
    //     {answerOptions: 'A Snake', isCorrect: false},
    //     {answerOptions: 'A coding language', isCorrect: true},
    //     {answerOptions: 'A game', isCorrect: false},
    //     {answerOptions: 'IDK...', isCorrect: false},
    //   ],
    // },
    // {
    //   q_text: 'What is Python?',
    //   quiz_answer: [
    //     {answerOptions: 'A Snake', isCorrect: false},
    //     {answerOptions: 'A coding language', isCorrect: true},
    //     {answerOptions: 'A game', isCorrect: false},
    //     {answerOptions: 'IDK...', isCorrect: false},
    //   ],
    // },
    // {
    //   q_text: 'What is Python?',
    //   quiz_answer: [
    //     {answerOptions: 'A Snake', isCorrect: false},
    //     {answerOptions: 'A coding language', isCorrect: true},
    //     {answerOptions: 'A game', isCorrect: false},
    //     {answerOptions: 'IDK...', isCorrect: false},
    //   ],
    // },
    // {
    //   q_text: 'What is Python?',
    //   quiz_answer: [
    //     {answerOptions: 'A Snake', isCorrect: false},
    //     {answerOptions: 'A coding language', isCorrect: true},
    //     {answerOptions: 'A game', isCorrect: false},
    //     {answerOptions: 'IDK...', isCorrect: false},
    //   ],
    // },
    // {
    //   q_text: 'What is Python?',
    //   quiz_answer: [
    //     {answerOptions: 'A Snake', isCorrect: false},
    //     {answerOptions: 'A coding language', isCorrect: true},
    //     {answerOptions: 'A game', isCorrect: false},
    //     {answerOptions: 'IDK...', isCorrect: false},
    //   ],
    // },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < qq.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <React.Fragment>
      <div className = "h1">
        <h1> Python Quiz </h1>
      </div>
      <div className = 'li'>
        <li>Simple Questions</li>
        <li>Choose 1 of 4 options</li>
        <li>Good Luck!</li>
      </div>



		<div className='app'>
      <body>{
        showScore ?
        (<div className='score-section'>You scored {score} out of {qq.length}</div>)
         :(<>
  					<div className='question-section'>
              <div className='question-text'>({currentQuestion + 1}/{qq.length}) {qq[currentQuestion].q_text}</div>
              <footer align = "left" style={{color:"black"}}>Angel Santana 2020 </footer>
  					</div>
  					<div className='answer-section'>
  						{qq[currentQuestion].quiz_answer.map((answerOption) => (
  							<button onClick={() =>handleAnswerOptionClick(answerOption.isCorrect)}>
                  {answerOption.answerOptions}
                </button>
  						))}
  					</div>
  				</>
  			)}
      </body>
		</div>
    </React.Fragment>
    );
}


export default App;
