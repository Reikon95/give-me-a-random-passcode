import React, { useState } from "react";
import randomInteger from "./scripts/integer.jsx";
import "./App.css";

function App() {
  let [code, setCode] = useState(null);
  let [useNumbers, setUseNumbers] = useState(false);
  let [useLowercase, setUseLowerCase] = useState(false);
  let [useUpperCase, setUseUpperCase] = useState(false);
  let [useSpecials, setUseSpecials] = useState(false);
  let [useWords, setUseWords] = useState(false);
  let [displayCode, setDisplayCode] = useState(false);
  const handleIntegerChange = (e) => {
    setCode(e.target.value);
  };

  const generateCode = () => {
    console.log("test");
    setDisplayCode(true);
    console.log("display ", displayCode);
  };

  return (
    <div className="App">
      <div>
        <h1>Generate a Secure Passcode</h1>
      </div>
      <div class="decide-length-of-code">
        I want it to be...{" "}
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
      <button onClick={() => generateCode()}>GENERATE</button>
      <div>
        <h2>Why should I care about this?</h2>
        <p>
          Simple passwords are a hacker's best friend - if they can guess it,
          they can get it.
        </p>
        <h2>How long should my password be?</h2>
      </div>
    </div>
  );
}

export default App;
