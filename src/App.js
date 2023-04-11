import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Rinith");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I will only run on the initial page load");
  }, []);

  useEffect(() => {
    console.log("Name Changed");
  }, [name]);

  return (
    <div className="App">
      <div>
        <p>Change the name and the useEffect will run</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <br />
      <div>
        <p>This will run only on the initial load</p>
        {count} <button onClick={() => setCount(count + 1)}>Add one</button>
      </div>
    </div>
  );
}
