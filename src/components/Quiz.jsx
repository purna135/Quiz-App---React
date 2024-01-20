import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteLogo from "../assets/quiz-complete.png";

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
