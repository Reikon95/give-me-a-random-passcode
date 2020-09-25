import React, { useState } from "react";
import randomInteger from "./scripts/integer.jsx";
import "./App.css";

function App() {
  let [code, setCode] = useState(null);
  let [useNumbers, setUseNumbers] = useState(false);
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
          Lowercase <input type="checkbox" />
        </li>
        <li>
          Uppercase <input type="checkbox" />{" "}
        </li>
        <li>
          Specials <input type="checkbox" />
        </li>
        <li>plus... how many words?</li>
      </ul>
      <input type="number" value={code} onChange={handleIntegerChange} />
      {code ? randomInteger(code, 5, useNumbers) : ""}
    </div>
  );
}

export default App;
