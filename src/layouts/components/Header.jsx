import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  headerContainer: {
    display: "flex",
    height: "100px",
    margin: 0,
    width: "100%",
    border: "1px solid black",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <h2>WARM UP</h2>
      <div>
        <button>Disconnection</button>
      </div>
    </div>
  );
}

export default Header;
