import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NumberPad from "./components/NumberPad";

function App() {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState("");
  // const [current, setCurrent] = useState("");
  const [operator, setOperator] = useState("");

  const addToDisplay = (val) => {
    if (display === "0") {
      setDisplay("" + val);
    } else {
      setDisplay(display + val);
    }
  };
  const addZeroToDisplay = (val) => {
    if (display !== "0") {
      setDisplay(display + val);
    }
  };
  const addDecimalToDisplay = (val) => {
    if (display.indexOf(".") === -1) {
      setDisplay(display + val);
    }
  };
  const clearAll = () => {
    setDisplay("0");
    setPrevious("0");
    // setCurrent("");
    setOperator("");
  };

  const addition = () => {
    if (operator === "") {
      setPrevious(display);
      setDisplay("0");
      setOperator("plus");
    } else {
      evaluate("plus");
      setDisplay("0");
    }
  };
  const subtraction = () => {
    if (operator === "") {
      setPrevious(display);
      setDisplay("0");
      setOperator("minus");
    } else {
      evaluate("minus");
      setDisplay("0");
    }
  };
  const multiplication = () => {
    if (operator === "") {
      setPrevious(display);
      setDisplay("0");
      setOperator("times");
    } else {
      evaluate("times");
      setDisplay("0");
    }
  };
  const division = () => {
    if (operator === "") {
      setPrevious(display);
      setDisplay("0");
      setOperator("over");
    } else {
      evaluate("over");
      setDisplay("0");
    }
  };

  const evaluate = (oper) => {
    let prev = previous;
    if (operator === "plus") {
      setPrevious(Number(prev) + Number(display));
    } else if (operator === "minus") {
      setPrevious(Number(previous) - Number(display));
    } else if (operator === "times") {
      setPrevious(Number(previous) * Number(display));
    } else if (operator === "over") {
      setPrevious(Number(previous) / Number(display));
    }
    setOperator(oper);
  };

  const answer = () => {
    let curr = display;
    if (operator === "plus") {
      setDisplay(Number(previous) + Number(curr));
    } else if (operator === "minus") {
      setDisplay(Number(previous) - Number(curr));
    } else if (operator === "times") {
      setDisplay(Number(previous) * Number(curr));
    } else if (operator === "over") {
      setDisplay(Number(previous) / Number(curr));
    }
    setOperator("")
  };

  return (
    <>
      <header>
        <h1>Calculator</h1>
      </header>

      <NumberPad>
        <div id="display">{display}</div>
        <Button clickHandler={addToDisplay} id={"one"}>
          1
        </Button>
        <Button clickHandler={addToDisplay} id={"two"}>
          2
        </Button>
        <Button clickHandler={addToDisplay} id={"three"}>
          3
        </Button>
        <Button clickHandler={addition} id={"add"}>
          +
        </Button>
        <Button clickHandler={addToDisplay} id={"four"}>
          4
        </Button>
        <Button clickHandler={addToDisplay} id={"five"}>
          5
        </Button>
        <Button clickHandler={addToDisplay} id={"six"}>
          6
        </Button>
        <Button clickHandler={subtraction} id={"subtract"}>
          -
        </Button>
        <Button clickHandler={addToDisplay} id={"seven"}>
          7
        </Button>
        <Button clickHandler={addToDisplay} id={"eight"}>
          8
        </Button>
        <Button clickHandler={addToDisplay} id={"nine"}>
          9
        </Button>
        <Button clickHandler={multiplication} id={"multiply"}>
          *
        </Button>
        <Button clickHandler={addDecimalToDisplay} id={"decimal"}>
          .
        </Button>
        <Button clickHandler={addZeroToDisplay} id={"zero"}>
          0
        </Button>
        <Button clickHandler={clearAll} id={"clear"}>
          CE
        </Button>
        <Button clickHandler={division} id={"divide"}>
          /
        </Button>
        <Button clickHandler={answer} id={"equals"}>
          =
        </Button>
      </NumberPad>
    </>
  );
}

export default App;
