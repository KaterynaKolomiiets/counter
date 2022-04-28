import "./App.css";

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
        <button type="button" onClick={increment}>
          Increment
        </button>
        <div>
          <span>Counter:</span> <span> {value}</span>
        </div>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

// Create a new public repository on your github account to host the source code of a react app.
// On your local machine and using a language of your choice, create a react app (let's call it "counter") with following elements:
// - A button with the label: "Increment"
// - A button with the label: "Reset"
// - A number prefixed by the label "Counter:"

// Behavior: Once the react page is loaded the number should be set to 0(zero).
// With every push on the "Increment" button this number increments by 1.  Pushing the "Reset" counter resets the number to zero.

// The page should include a stylesheet that applies two different(of your choice) colors to the buttons
// when in the normal and when in the pressed state.Also the number should show a different color when it is 0.

// The github repo should show at least 2 commits instead of just a single commit where everything got uploaded.
