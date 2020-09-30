import React, { useState } from "react";
import randomInteger from "./scripts/integer.jsx";
import Content from "./assets/content/content";
import "./App.css";

function App() {
  let [code, setCode] = useState(null);
  let [useNumbers, setUseNumbers] = useState(false);
  let [useLowercase, setUseLowerCase] = useState(false);
  let [useUpperCase, setUseUpperCase] = useState(false);
  let [useSpecials, setUseSpecials] = useState(false);
  let [useWords, setUseWords] = useState(false);
  let [displayCode, setDisplayCode] = useState(false);
  let [displayError, setDisplayError] = useState("");

  const handleIntegerChange = (e) => {
    setCode(e.target.value);
  };

  const generateCode = () => {
    if (
      useNumbers ||
      useLowercase ||
      useUpperCase ||
      useSpecials ||
      useWords === true
    ) {
      setDisplayError(false);
      setDisplayCode(true);
    } else {
      setDisplayError("ERROR - Please select from the above options");
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Generate a Secure Passcode</h1>
      </div>
      <div class="decide-length-of-code">
        I want my code to be...{" "}
        <input
          type="number"
          value={code}
          onChange={handleIntegerChange}
          className="code-length-input"
        />{" "}
        letters long.
      </div>
      I want to include... Numbers{" "}
      <input
        type="checkbox"
        onChange={() => setUseNumbers((useNumbers = !useNumbers))}
      />
      Lowercase{" "}
      <input
        type="checkbox"
        onChange={() => setUseLowerCase((useLowercase = !useLowercase))}
      />
      Uppercase{" "}
      <input
        type="checkbox"
        onChange={() => setUseUpperCase((useUpperCase = !useUpperCase))}
      />{" "}
      Specials{" "}
      <input
        type="checkbox"
        onChange={() => setUseSpecials((useSpecials = !useSpecials))}
      />
      Words
      <input
        type="checkbox"
        onChange={() => setUseWords((useWords = !useWords))}
      ></input>
      <div className="result-wrapper">
        {displayCode
          ? randomInteger(
              code,
              useNumbers,
              useWords,
              useLowercase,
              useUpperCase,
              useSpecials
            )
          : ""}
      </div>
      <button className="app-button app-button-reset">RESET</button>
      <button
        onClick={() => generateCode()}
        className="app-button app-button-generate"
      >
        GENERATE
      </button>
      <div className="error-message">{displayError}</div>
      {Content()}
    </div>
  );
}

export default App;
