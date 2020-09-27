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
  		<div className='app'>
  			{showScore ? (
  				<div className='score-section'>
  					You scored {score} out of {qq.length}
  				</div>
  			) : (
  				<>
  					<div className='question-section'>
  						<div className='question-count'>
  							<span>Question {currentQuestion + 1}</span>/{qq.length}
  						</div>
  						<div className='question-text'>{qq[currentQuestion].q_text}</div>
  					</div>
  					<div className='answer-section'>
  						{qq[currentQuestion].quiz_answer.map((answerOption) => (
  							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
  						))}
  					</div>
  				</>
  			)}
  		</div>
    );
}


export default App;
