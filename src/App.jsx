import React, { useState } from "react"
import { Button, Checkbox, InputLabel } from "@material-ui/core"
import codeGenerator from "./scripts/codeGenerator.tsx"
import Content from "./assets/content/content.tsx"
import useInterval from "./scripts/useInterval"
import "./App.css"
import * as copy from "copy-to-clipboard"
import Facts from "./assets/facts/facts"

function App() {
  const [generatingNewCodes, setGeneratingNewCodes] = useState(false)
  const [count, setCount] = useState(0)
  const [code, setCode] = useState("")
  const [copied, setCopied] = useState(false)
  const [codeLength, setCodeLength] = useState(null)
  const [displayCode, setDisplayCode] = useState(false)
  const [displayError, setDisplayError] = useState("")
  const [codeObject, setCodeObject] = useState({
    nums: false,
    lower: false,
    upper: false,
    special: false,
    words: false,
  })

  const startGenerateCodeLoop = () => {
    generateCode()
    setGeneratingNewCodes(true)
  }

  const stopGenerateCodeLoop = () => {
    setGeneratingNewCodes(false)
  }

  const handleIntegerChange = (e) => {
    setCodeLength(e.target.value)
  }

  const handleCopy = (text) => {
    let requiredString = text.props.children.props.children[1]
    copy(requiredString.props.children.toString())
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  const setObj = (char) => {
    setCodeObject({ ...codeObject, [char]: !codeObject[char] })
  }
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
      )
      setDisplayError(false)
      setDisplayCode(true)
      setCount(count + 1)
    } else {
      setDisplayCode(false)
      if (!Object.values(codeObject).includes(true)) {
        setDisplayError("ERROR - Please select one of the above options")
      } else if (codeLength > 256) {
        setDisplayCode(false)
        setDisplayError(
          "Your passcode cannot include more than 256 characters."
        )
      } else if (!codeLength) {
        setDisplayError(
          "Error - please choose the length of your code. Just type it in the box!"
        )
      } else {
        setDisplayError("Error - please report to admin")
      }
    }
  }

  useInterval(
    () => {
      if (generatingNewCodes) {
        generateCode()
      }
    },
    generatingNewCodes ? 10000 : null
  )

  return (
    <div className="App">
      <div className="title">
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
          min="0"
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
      <div className="buttons-wrap">
        <button
          onClick={() => generateCode()}
          className="app-button app-button-generate"
          data-testid="manual-generate-code-button"
        >
          Get New Code
        </button>
        {generatingNewCodes ? (
          <button
            onClick={() => stopGenerateCodeLoop()}
            className="app-button app-button-generate"
          >
            Stop Generating Codes{" "}
          </button>
        ) : (
          <button
            onClick={() => startGenerateCodeLoop()}
            className="app-button app-button-generate"
          >
            Generate Me Codes!{" "}
          </button>
        )}
      </div>
      <div className="error-message">{displayError}</div>
      <div className="result-wrapper" onClick={() => handleCopy(code)}>
        {displayCode ? (
          <div className="code-object" data-testid="generated-code">
            {code}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {copied
          ? " 🙌 Copied to clipboard!  🙌"
          : displayCode
          ? "Hint - click to copy to clipboard"
          : ""}
      </div>
      <Facts numberOfCodes={count} />
      <Content />
    </div>
  )
}

export default App
