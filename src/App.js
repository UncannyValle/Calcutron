import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NumberPad from "./components/NumberPad";

function App() {
  const [result, setResult] = useState(0);

  const buttonClick = value => {
    let number = result;
    if (value === "clear") {
      number = 0 
      setResult("0");
    } else if (number === 0 && value > 0) {
      number = value
      setResult(value);
    } else if (number === 0 && value === ".") {
      setResult(0 + value);
    } else if (number > 0) {
      setResult("" + result + value);
    }
    console.log("click");
  };

  return (
    <>
      <header>
        <h1>Animal Calculator</h1>
      </header>

      <NumberPad>
        <input id="display" type="number" readOnly value={result}></input>
        <Button id={"one"} name={1} clickHandler={() => buttonClick(1)} />
        <Button id={"two"} name={2} clickHandler={() => buttonClick(2)} />
        <Button id={"three"} name={3} clickHandler={() => buttonClick(3)} />
        <Button id={"multiply"} name={"*"} />

        <Button id={"four"} name={4} clickHandler={() => buttonClick(4)} />
        <Button id={"five"} name={5} clickHandler={() => buttonClick(5)} />
        <Button id={"six"} name={6} clickHandler={() => buttonClick(6)} />
        <Button id={"divide"} name={"/"} />

        <Button id={"seven"} name={7} clickHandler={() => buttonClick(7)} />
        <Button id={"eight"} name={8} clickHandler={() => buttonClick(8)} />
        <Button id={"nine"} name={9} clickHandler={() => buttonClick(9)} />
        <Button id={"add"} name={"+"} />

        <Button id={"zero"} name={0} clickHandler={() => buttonClick(0)} />
        <Button
          id={"decimal"}
          name={"."}
          clickHandler={() => buttonClick(".")}
        />

        <Button id={"subtract"} name={"-"} />
        <Button
          id={"clear"}
          name={"CE"}
          clickHandler={() => buttonClick("clear")}
        />

        <Button id={"equals"} name={"="} />
      </NumberPad>
    </>
  );
}

export default App;
