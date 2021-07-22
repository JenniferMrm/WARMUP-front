import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
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
    "&:hover": {
      cursor: "pointer",
    },
  },

  button: {
    marginRight: "30px",
  },
});

function Header() {
  const classes = useStyles();
  const history = useHistory();

  const redirectToDashboard = () => {
    if (window.location.pathname === "/login") {
      history.push("/login");
    } else {
      history.push("/");
    }
  };

  const disconnect = () => {
    history.push("/login");
  };
  return (
    <div className={classes.headerContainer}>
      <div onClick={redirectToDashboard}>
        <h2 className={classes.title}>WARM UP</h2>
      </div>
      <div className={classes.button}>
        <div onClick={disconnect}>
          <Button text={"DISCONNECTION"} fontSize={"16px"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
