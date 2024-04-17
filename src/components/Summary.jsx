import imgQuizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const skippedAnswersPercentage = Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersPercentage = Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswerPercentage    = 100 - skippedAnswersPercentage - correctAnswersPercentage;

  return (
    <div id="summary">
      <img src={imgQuizComplete} alt="Trophy Image" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercentage}%</span>
          <span className="text">not answered</span>
        </p>
        <p>
          <span className="number">{correctAnswersPercentage}%</span>
          <span className="text">correctly answered</span>
        </p>{" "}
        <p>
          <span className="number">{wrongAnswerPercentage}%</span>
          <span className="text">wrong answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          let answerText = "";

          if (answer === null) {
            cssClass += " skipped";
            answerText = "Not Answered";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
            answerText = answer;
          } else {
            cssClass += " wrong";
            answerText = answer;
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answerText}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
