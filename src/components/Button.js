import React from "react";

const Button = (props) => (
  <button className="button" onClick={() => props.clickHandler(props.children)} id={props.id}>
    {props.children}
  </button>
);

export default Button;
