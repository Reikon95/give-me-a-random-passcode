import React, { useState } from "react";
import codeGenerator from "./scripts/codeGenerator.tsx";
import Content from "./assets/content/content.tsx";
import "./App.css";
import * as copy from "copy-to-clipboard";

function App() {
  let [code, setCode] = useState("");
  let [copied, setCopied] = useState(false);
  let [codeLength, setCodeLength] = useState(null);
  let [displayCode, setDisplayCode] = useState(false);
  let [displayError, setDisplayError] = useState("");
  let [codeObject, setCodeObject] = useState({
    nums: false,
    lower: false,
    upper: false,
    special: false,
    words: false,
  });

  const handleIntegerChange = (e) => {
    setCodeLength(e.target.value);
  };

  const handleCopy = (text) => {
    let requiredString = text.props.children.props.children[1];
    copy(requiredString.props.children.toString());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const resetCode = () => {
    setCode("");
    setDisplayCode(false);
  };

  const setObj = (char) => {
    setCodeObject({ ...codeObject, [char]: !codeObject[char] });
  };
  const generateCode = () => {
    if (
      Object.values(codeObject).includes(true) &&
      codeLength > 0 &&
      codeLength < 257
    ) {
      setCode(
        codeGenerator(
          codeLength,
          codeObject.nums,
          codeObject.words,
          codeObject.lower,
          codeObject.upper,
          codeObject.special
        )
      );
      setDisplayError(false);
      setDisplayCode(true);
    } else {
      setDisplayCode(false);
      if (!Object.values(codeObject).includes(true)) {
        setDisplayError("ERROR - Please select one of the above options");
      } else if (codeLength > 256) {
        setDisplayCode(false);
        setDisplayError(
          "Your passcode cannot include more than 256 characters, excluding the words (if added)"
        );
      } else {
        setDisplayError("Error - please report");
      }
    }
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Generate an Example Secure Passcode</h1>
        <em>
          This is a personal project, <strong>NOT</strong> a high security
          password generator. This is for demonstration purposes{" "}
          <strong>only.</strong>
        </em>
      </div>
      <div className="decide-length-of-code">
        I want my code to be...{" "}
        <input
          type="number"
          value={codeLength}
          onChange={handleIntegerChange}
          className="code-length-input"
          min="0"
        />
        characters long.
      </div>
      <div className="options-wrapper">
        I want to include... Numbers
        <input type="checkbox" onChange={() => setObj("nums")} />
        Lowercase <input type="checkbox" onChange={() => setObj("lower")} />
        Uppercase <input type="checkbox" onChange={() => setObj("upper")} />
        Specials <input type="checkbox" onChange={() => setObj("special")} />
      </div>
      Can't remember a random code? Tick to generate random words with special
      characters instead
      <input type="checkbox" onChange={() => setObj("words")}></input>
      <div className="buttons-wrap">
        <button
          className="app-button app-button-reset"
          onClick={() => resetCode()}
        >
          RESET YOUR CODE
        </button>
        <button
          onClick={() => generateCode()}
          className="app-button app-button-generate"
        >
          GET NEW CODE
        </button>
      </div>
      <div className="error-message">{displayError}</div>
      <div className="result-wrapper" onClick={() => handleCopy(code)}>
        {displayCode ? <div className="code-object">{code}</div> : ""}
      </div>
      <div>
        {copied
          ? " 🙌 Copied to clipboard!  🙌"
          : displayCode
          ? "Hint - click to copy to clipboard"
          : ""}
      </div>
      {Content()}
    </div>
  );
}

export default App;
