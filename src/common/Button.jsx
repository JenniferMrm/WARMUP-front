import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  button: {
    border: "none",
    padding: "20px 30px",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

function Button({ text, padding, fontSize, backgroundColor }) {
  const classes = useStyles();
  return (
    <div>
      <button
        className={classes.button}
        style={{
          padding: padding,
          fontSize: fontSize,
          backgroundColor: backgroundColor,
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
