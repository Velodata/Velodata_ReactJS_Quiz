import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
// import QuestionTimer from "./QuestionTimer.jsx";
// import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import imgQuizComplete from "../assets/quiz-complete.png";
import Summary from "./Summary.jsx";

export default function Quiz() {


  const [userAnswers, setUserAnswers] = useState([]);

  // const [answerState, setAnswerState] = useState('');

  const activeQuestionIndex = userAnswers.length ;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
          return [...prevUserAnswers, selectedAnswer];
        });
        
      }, []
    );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }




  return (
    <div id="quiz">
      <div id="question">
        <Question 
          key={activeQuestionIndex} // you're not allowed to use the same key in two different components
          questionNumber={activeQuestionIndex} // the 'key' prop is used exclusively by React, we must use our own prop here.
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}

          />
      </div>
    </div>
  );
}
