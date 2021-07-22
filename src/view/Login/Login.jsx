import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const useStyles = createUseStyles({
  loginContainer: {
    width: "100%",
    height: "calc(100vh - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  nameAndPasswordContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
    width: "30%",
    height: "300px",
  },

  inputContainer: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  input: {
    height: "40px",
    width: "80%",
  },

  buttonGo: {
    marginTop: "10px",
  },

  title: {
    fontSize: "80px",
  },
  subtitle: {
    fontSize: "40px",
  },
});

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.loginContainer}>
      <h1 className={classes.title}>WARM-UP</h1>
      <h2 className={classes.subtitle}>Manage your musical training</h2>
      <div className={classes.nameAndPasswordContainer}>
        <div className={classes.inputContainer}>
          <p className={classes.text}>Pseudo :</p>
          <input className={classes.input}></input>
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.text}>Password :</p>
          <input className={classes.input}></input>
        </div>
        <div className={classes.buttonGo}>
          <Link to={"/"}>
            <Button text={"LET'S GO !"} fontSize={"20px"} />
          </Link>
        </div>
      </div>
      <div className={classes.buttonCreate}>
        <Link to={"/register/"}>
          <Button text={"CREATE MY PROFILE"} fontSize={"20px"} />
        </Link>
      </div>
    </div>
  );
}

export default Login;
