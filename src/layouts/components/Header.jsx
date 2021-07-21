import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../../common/Button";

const useStyles = createUseStyles({
  headerContainer: {
    display: "flex",
    height: "100px",
    margin: 0,
    width: "100%",
    border: "1px solid black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: "30px",
    marginLeft: "30px",
  },

  button: {
    marginRight: "30px",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <h2 className={classes.title}>WARM UP</h2>
      <div className={classes.button}>
        <Button text={"DISCONNECTION"} fontSize={"16px"} />
      </div>
    </div>
  );
}

export default Header;
