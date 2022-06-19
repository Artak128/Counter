import { useState } from "react";
import "./App.css";

function App() {
  let [value, setValue] = useState(5);

  function changeCount(param) {
    if (param) {
      setValue(++value);
    } else if (!param && value > 1) {
      setValue(--value);
    }
  }

  return (
    <div className="main">
      <button onClick={() => changeCount(true)}>+</button>
      <p>{value}</p>
      <button onClick={() => changeCount(false)}>-</button>
    </div>
  );
}

export default App;
