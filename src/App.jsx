import React, { useState } from "react";
import randomInteger from "./scripts/integer.jsx";
import "./App.css";

function App() {
  let [code, setCode] = useState(null);
  let [useNumbers, setUseNumbers] = useState(false);
  let [useLowercase, setUseLowerCase] = useState(false);
  let [useUpperCase, setUseUpperCase] = useState(false);
  let [useSpecials, setUseSpecials] = useState(false);
  // let [numWords, setNumWords] = useState(0);
  const handleIntegerChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h1>Generate a secure Passcode</h1>
      </div>
      I want... Numbers{" "}
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
      {/* plus... how many words?
      <input type="number" /> */}
      <input type="number" value={code} onChange={handleIntegerChange} />
      <div className="result-wrapper">
        {code
          ? randomInteger(
              code,
              5,
              useNumbers,
              true,
              useLowercase,
              useUpperCase,
              useSpecials
            )
          : ""}
      </div>
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
