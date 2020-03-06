import React from "react";

const Button = (props) => (
  <button className="button" onClick={props.clickHandler} id={props.id} value={props.name}>
  {props.name}
  </button>
);

export default Button;
