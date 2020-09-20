import React, { useState } from "react";
import randomInteger from "./scripts/integer.tsx";
import "./App.css";

function App() {
  const [integer, setInteger] = useState(null);
  const handleIntegerChange = (e) => {
    setInteger(e.target.value);
  };
  return (
    <div className="App">
      I want... Numbers only!
      <input type="number" value={integer} onChange={handleIntegerChange} />
      {integer ? randomInteger(integer) : ""}
    </div>
  );
}

export default App;
