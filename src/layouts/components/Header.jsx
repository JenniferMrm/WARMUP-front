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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background:
      "linear-gradient(223deg, rgba(68,0,61,1) 0%, rgba(214,240,255,1) 100%)",
    fallbacks: {
      background: "white",
    },
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
    history.push("/");
  };

  const disconnect = () => {
    history.push("/login");
  };
  return (
    <div className={classes.headerContainer}>
      <div onClick={redirectToDashboard}>
        <h2 className={classes.title}>WARM-UP</h2>
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
