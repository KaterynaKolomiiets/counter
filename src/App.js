import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const reset = () => {
    setValue(0);
  };
  return (
    <div className="App">
      <div className="counter">
        <button
          className="btn"
          type="button"
          name="increment"
          onClick={increment}
        >
          Increment
        </button>
        <div>
          <span>Counter:</span> <span className={value===0 && "zero"}> {value}</span>
        </div>
        <button className="btn" type="button" name="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;