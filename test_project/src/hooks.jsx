import { useState } from "react";

function Counter(params) {
  let [counter, setCounter] = useState(10);

  // let counter = 2;

  const addValue = () => {
    console.log("value added");
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>counter here</h1>
      <h2>counter value : {counter}</h2>
      <br />
      <button onClick={addValue}>add</button>
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default Counter;
