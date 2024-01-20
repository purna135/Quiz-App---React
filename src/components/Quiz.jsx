import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [userAns, setUserAns] = useState([]);
  const queIdx = userAns.length;

  function handleSelectAns(selectedAns) {
    setUserAns((prevAns) => {
      return [...prevAns, selectedAns];
    });
  }

  return (
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
  );
}
