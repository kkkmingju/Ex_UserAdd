import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
            // 값이 지정되지 않을 경우를 대비
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;
