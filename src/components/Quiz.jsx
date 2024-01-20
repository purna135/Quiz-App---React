import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteLogo from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAns, setUserAns] = useState([]);
  const queIdx = userAns.length;
  const quizComplete = userAns.length === QUESTIONS.length;

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Trofy logo" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  function handleSelectAns(selectedAns) {
    setUserAns((prevAns) => {
      return [...prevAns, selectedAns];
    });
  }

  const shuffledAns = [...QUESTIONS[queIdx].answers];
  shuffledAns.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeOut={() => {
            handleSelectAns(null);
          }}
        />
        <h2>{QUESTIONS[queIdx].text}</h2>
        <ul id="answers">
          {shuffledAns.map((ans) => (
            <li key={ans} className="answer">
              <button onClick={() => handleSelectAns(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
