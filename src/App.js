import React, { useState, useId } from "react";

function App() {
  const [displayValue1, setDisplayValue1] = useState("");
  const [displayValue2, setDisplayValue2] = useState("");
  const [displayValue3, setDisplayValue3] = useState("");
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  return (
    <div className="App">
      <form>
        <label htmlFor={`${id1}-UserName`}>
          userName:{" "}
          <input
            type="text"
            id={`${id1}-UserName`}
            onBlur={(e) => setDisplayValue1(e.target.value)}
          />
        </label>
        <label htmlFor={`${id2}-Email`}>
          Email:{" "}
          <input
            type="email"
            id={`${id2}-Email`}
            onBlur={(e) => setDisplayValue2(e.target.value)}
          />
        </label>
        <label htmlFor={`${id3}-Password`}>
          Password:{" "}
          <input
            type="password"
            id={`${id3}-Password`}
            onBlur={(e) => setDisplayValue3(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <p>The UserName is : {displayValue1}</p>
      <p>The Email is : {displayValue2}</p>
      <p>The Password is : {displayValue3}</p>
    </div>
  );
}

export default App;
