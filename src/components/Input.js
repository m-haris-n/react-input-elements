import { useState } from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  let rowClass = "";
  let rowSpan = null;
  if (props.input.type === "radio" || props.input.type === "checkbox") {
    rowClass = "row";
    if(props.input.type === 'radio'){

      rowSpan = <span className={classes.checkRadio}></span>;
    }
    if(props.input.type === 'checkbox'){

      rowSpan = <span className={classes.checkBox}></span>;
    }
  }

  const [inputVal, setInputVal] = useState(props.input.value);

  const changeHandler = (event) => {
    setInputVal(event.target.value);
  };

  return (
    <div className={classes[`wrap${rowClass}`]}>
      <label
        htmlFor={props.input.id}
        style={{ display: rowClass.length !== 0 ? "none" : "inline-block" }}
      >
        {props.input.label}
      </label>

      {rowSpan}

      <input
        {...props.input}
        value={inputVal}
        className={classes[`input-${props.input.type}`]}
        onChange={changeHandler}
      />

      <label
        htmlFor={props.input.id}
        style={{ display: rowClass.length !== 0 ? "inline-block" : "none" }}
      >
        {props.input.label}
      </label>
    </div>
  );
}
