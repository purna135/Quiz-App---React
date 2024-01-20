import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteLogo from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAns, setUserAns] = useState([]);
  const queIdx = userAns.length;
  const shuffledAns = [...QUESTIONS[queIdx].answers];
  shuffledAns.sort(() => Math.random() - 0.5);
  const quizComplete = ans.length === QUESTIONS.length;

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

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[queIdx].text}</h2>
        <ul id="answers">
          {QUESTIONS[queIdx].answers.map((ans) => (
            <li key={ans} className="answer">
              <button onClick={() => handleSelectAns(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
