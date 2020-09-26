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
      I want...
      <ul>
        <li>
          Numbers{" "}
          <input
            type="checkbox"
            onChange={() => setUseNumbers((useNumbers = !useNumbers))}
          />
        </li>
        <li>
          Lowercase{" "}
          <input
            type="checkbox"
            onChange={() => setUseLowerCase((useLowercase = !useLowercase))}
          />
        </li>
        <li>
          Uppercase{" "}
          <input
            type="checkbox"
            onChange={() => setUseUpperCase((useUpperCase = !useUpperCase))}
          />{" "}
        </li>
        <li>
          Specials{" "}
          <input
            type="checkbox"
            onChange={() => setUseSpecials((useSpecials = !useSpecials))}
          />
        </li>
        <li>plus... how many words?</li>
        <input type="number" />
      </ul>
      <input type="number" value={code} onChange={handleIntegerChange} />
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
  );
}

export default App;
