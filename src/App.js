import React from "react";
import "./App.css";
import Button from "./components/Button";
import NumberPad from "./components/NumberPad";

function App() {
  return (
    <>
      <header>
        <h1>Animal Calculator</h1>
      </header>
      <NumberPad>
      <Button id={"one"} name={1} />
      <Button id={"two"} name={2} />
      <Button id={"three"} name={3} />
      <Button id={"plus"} name={""} />

      <Button id={"four"} name={4} />
      <Button id={"five"} name={5} />
      <Button id={"six"} name={6} />
      <Button id={"seven"} name={7} />
      <Button id={"eight"} name={8} />
      <Button id={"nine"} name={9} />
      <Button id={"zero"} name={0} />
      

      </NumberPad>
    </>
  );
}

export default App;
