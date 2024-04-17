import { useState, useCallback, useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect  }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]; // spread the answers array into a second new array and shuffle the answers.
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // aiming for 50% to be above 0 and 50% below 0
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button 
              onClick={() => onSelect(answer)} 
              className={cssClass}
              disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
