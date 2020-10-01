import React, { useState } from "react";
import randomInteger from "./scripts/integer.jsx";
import Content from "./assets/content/content";
import "./App.css";
import * as copy from "copy-to-clipboard";

function App() {
  let [code, setCode] = useState("");
  let [copied, setCopied] = useState(false);
  let [codeLength, setCodeLength] = useState(null);
  let [useNumbers, setUseNumbers] = useState(false);
  let [useLowercase, setUseLowerCase] = useState(false);
  let [useUpperCase, setUseUpperCase] = useState(false);
  let [useSpecials, setUseSpecials] = useState(false);
  let [useWords, setUseWords] = useState(false);
  let [displayCode, setDisplayCode] = useState(false);
  let [displayError, setDisplayError] = useState("");

  const handleIntegerChange = (e) => {
    setCodeLength(e.target.value);
  };

  const handleCopy = (text) => {
    let requiredString = text.props.children[1];
    copy(requiredString.toString());
    setCopied(true);
  };

  const generateCode = () => {
    if (
      useNumbers ||
      useLowercase ||
      useUpperCase ||
      useSpecials ||
      useWords === true
    ) {
      setCode(
        randomInteger(
          codeLength,
          useNumbers,
          useWords,
          useLowercase,
          useUpperCase,
          useSpecials
        )
      );
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
          value={codeLength}
          onChange={handleIntegerChange}
          className="code-length-input"
          min="0"
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
      <div className="buttons-wrap">
        <button className="app-button app-button-reset">RESET</button>
        <button
          onClick={() => generateCode()}
          className="app-button app-button-generate"
        >
          GENERATE
        </button>
      </div>
      <div className="error-message">{displayError}</div>
      <div className="result-wrapper" onClick={() => handleCopy(code)}>
        {displayCode ? code : ""}
      </div>
      {Content()}
    </div>
  );
}

export default App;
