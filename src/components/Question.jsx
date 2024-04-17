import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({ questionNumber, onSelectAnswer, onSkipAnswer, }) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timerLength = 10000;
  if ( answer.selectedAnswer ) {
    timerLength = 1000;
  }
  if ( answer.isCorrect !== null) {
    timerLength = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionNumber].answers[0] === answer
      })

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000)
    }, 1000);
  }

  let answerState = '';
  if ( answer.selectedAnswer && answer.isCorrect !== null ) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if ( answer.selectedAnswer ) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer 
        key={timerLength}
        timeout={timerLength}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}  // only do this is NO ANSWER was selected.
        mode={answerState}
      />
      <h2>{QUESTIONS[questionNumber].text}</h2>
      <Answers
        answers={QUESTIONS[questionNumber].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
