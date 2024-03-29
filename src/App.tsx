import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import codeGenerator from "./scripts/codeGenerator";
import Content from "./components/content/content";
import useInterval from "./scripts/useInterval";
import "./App.css";
import copy from "copy-to-clipboard";
import Facts from "./components/facts/facts";
import CopiedIndicator from "./components/copied-indicator/copiedIndicator";

function App() {
  const [generatingNewCodes, setGeneratingNewCodes] = useState(false);
  const [count, setCount] = useState(0);
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [codeLength, setCodeLength] = useState(0);
  const [displayCode, setDisplayCode] = useState(false);
  const [displayError, setDisplayError] = useState("");
  const [codeObject, setCodeObject] = useState({
    nums: false,
    lower: false,
    upper: false,
    special: false,
  });

  const startGenerateCodeLoop = (): void => {
    generateCode();
    setGeneratingNewCodes(true);
  };

  const stopGenerateCodeLoop = (): void => {
    setGeneratingNewCodes(false);
  };

  const handleIntegerChange = (e): void => {
    setCodeLength(e.target.value);
  };

  const handleCopy = (text): void => {
    let requiredString = text.props.children.props.children[1];
    copy(requiredString.props.children.toString());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const setObj = (char: string): void => {
    setCodeObject({ ...codeObject, [char]: !codeObject[char] });
  };
  const generateCode = (): void => {
    if (
      Object.values(codeObject).includes(true) &&
      codeLength > 0 &&
      codeLength < 257
    ) {
      setCode(
        // @ts-ignore
        codeGenerator(
          codeLength,
          codeObject.nums,
          codeObject.lower,
          codeObject.upper,
          codeObject.special
        )
      );
      setDisplayError("");
      setDisplayCode(true);
      setCount(count + 1);
    } else {
      setDisplayCode(false);
      if (!Object.values(codeObject).includes(true)) {
        setDisplayError("ERROR - Please select one of the above options");
      } else if (codeLength > 256) {
        setDisplayCode(false);
        setDisplayError(
          "Your passcode cannot include more than 256 characters."
        );
      } else if (codeLength < 1) {
        setDisplayCode(false);
        setDisplayError("Your passcode must have at least one character");
      } else if (!codeLength) {
        setDisplayError(
          "Error - please choose the length of your code. Just type it in the box!"
        );
      } else {
        setDisplayError("Error - please report to admin");
      }
    }
  };

  useInterval(
    (): void => {
      if (generatingNewCodes) {
        generateCode();
      }
    },
    generatingNewCodes ? 10000 : null
  );

  return (
    <div className="App">
      <div className="app-title">
        <h1>Generate an Example Secure Passcode</h1>
        Don't get pwned.
      </div>
      <div className="decide-length-of-code">
        I want my code to be...
        <input
          type="number"
          value={codeLength ? codeLength : ""}
          onChange={handleIntegerChange}
          className="code-length-input"
          min={1}
          data-testid="length-input"
        />
        characters long.
      </div>
      <div className="options-wrapper">
        I want to include these characters...
        <div>
          Numbers
          <Checkbox
            onChange={() => setObj("nums")}
            data-testid="numbers-checkbox"
          />
          Lowercase
          <Checkbox
            onChange={() => setObj("lower")}
            data-testid="lowercase-checkbox"
          />
          Uppercase
          <Checkbox
            onChange={() => setObj("upper")}
            data-testid="uppercase-checkbox"
          />
          Specials
          <Checkbox
            onChange={() => setObj("special")}
            data-testid="special-checkbox"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => generateCode()}
          className="app-button"
          data-testid="manual-generate-code-button"
        >
          Get New Code
        </button>
        {generatingNewCodes ? (
          <button onClick={() => stopGenerateCodeLoop()} className="app-button">
            Stop Generating Codes
          </button>
        ) : (
          <button
            onClick={() => startGenerateCodeLoop()}
            className="app-button"
          >
            Generate Me Codes!
          </button>
        )}
      </div>
      <div className="error-message">{displayError}</div>
      <div className="result-wrapper" onClick={() => handleCopy(code)}>
        {displayCode && (
          <div className="code-object" data-testid="generated-code">
            {code}
          </div>
        )}
      </div>
      <CopiedIndicator copied={copied} displayCode={displayCode} />
      <Facts numberOfCodes={count} />
      <Content />
    </div>
  );
}

export default App;
