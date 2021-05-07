import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of the following symbol is used to denote a pre-processor statement?',
			answerOptions: [
				{ answerText: '     !', isCorrect: false },
				{ answerText: '     #', isCorrect: true },
				{ answerText: '     ~', isCorrect: false },
				{ answerText: '     ;', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a Scalar Data type?',
			answerOptions: [
				{ answerText: 'Float', isCorrect: true },
				{ answerText: 'Pointer', isCorrect: false },
				{ answerText: 'Union', isCorrect: false },
				{ answerText: 'Array', isCorrect: false },
			],
		},
		{
			questionText: 'Which escape character can be used to beep from speaker in C?',
			answerOptions: [
				{ answerText: '\\a', isCorrect: true },
				{ answerText: '\\b', isCorrect: false },
				{ answerText: '\\m', isCorrect: false },
				{ answerText: '\\n', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an example of compounded assignment statement?',
			answerOptions: [
				{ answerText: 'a=5', isCorrect: false },
				{ answerText: 'a=b', isCorrect: false },
				{ answerText: ' a=b=c', isCorrect: false },
				{ answerText: 'a+=5', isCorrect: true },
			],
    },
    {
			questionText: 'What is the 16-bit compiler allowable range for integer constants?',
			answerOptions: [
				{ answerText: '-3.4e38 to 3.4e38', isCorrect: false },
				{ answerText: '-32767 to 32768', isCorrect: false },
				{ answerText: '-32668 to 32667', isCorrect: false },
				{ answerText: '-32768 to 32767', isCorrect: true },
			],
    },
    {
			questionText: 'Where is the correct place to insert a JavaScript?',
			answerOptions: [
				{ answerText: '<head>', isCorrect: false },
				{ answerText: '<body>', isCorrect: false },
				{ answerText: 'both <head> and <body> section', isCorrect: true },
				{ answerText: 'outside <body>', isCorrect: false },
			],
    },
    {
			questionText: 'How to write an IF statement in JavaScript?',
			answerOptions: [
				{ answerText: 'if i=5:', isCorrect: false },
				{ answerText: 'if (i==5)', isCorrect: true },
				{ answerText: ' if i=5', isCorrect: false },
				{ answerText: 'if i=5 then', isCorrect: false },
			],
    },
    {
			questionText: 'What is the correct syntax for referring to an external script called "xxx.js"?',
			answerOptions: [
				{ answerText: '<script link="xxx.js">', isCorrect: false },
				{ answerText: '<script src="xxx.js">  ', isCorrect: true },
				{ answerText: ' <script href="xxx.js">', isCorrect: false },
				{ answerText: '<script name="xxx.js">', isCorrect: false },
			],
    },
  {
    questionText: 'How do you create a reference variable of an existing variable in C++?',
    answerOptions: [
      { answerText: 'With the * operator', isCorrect: false },
      { answerText: 'With the REF keyword  ', isCorrect: false },
      { answerText: 'With the ref() function', isCorrect: false },
      { answerText: 'With the & operator  ', isCorrect: true },
    ],
  },
  {
    questionText: 'Which statement is used to stop a loop?',
    answerOptions: [
      { answerText: 'yeild', isCorrect: false },
      { answerText: 'stop', isCorrect: false },
      { answerText: 'break', isCorrect: true},
      { answerText: 'end', isCorrect: false },
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
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>
							{questions[currentQuestion].questionText}
						</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
								{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}