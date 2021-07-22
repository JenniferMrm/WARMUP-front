import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Link, useHistory } from "react-router-dom";
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
    fontSize: "18px",
  },

  buttonGo: {
    marginTop: "10px",
  },

  title: {
    fontSize: "80px",
    margin: "50px 0 20px 0",
  },
  subtitle: {
    fontSize: "40px",
    margin: "10px 0 100px 0",
  },
  text: {
    fontSize: "20px",
  },
});

function Login() {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const redirectToDashboard = () => {
    form.name === user.name ? history.push("/") : history.push("/login");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getUser = () => {
      try {
        axios
          .get(`${process.env.REACT_APP_WARMUP_BACK_URL}/api/users/1`)
          .then((response) => response.data)
          .then((data) => {
            setUser(data[0]);
          });
      } catch (e) {
        //err
      }
    };
    getUser();
  }, []);

  return (
    <div className={classes.loginContainer}>
      <h1 className={classes.title}>WARM-UP</h1>
      <h2 className={classes.subtitle}>Manage your musical training</h2>
      <div className={classes.nameAndPasswordContainer}>
        <div className={classes.inputContainer}>
          <p className={classes.text}>Pseudo :</p>
          <input
            className={classes.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className={classes.inputContainer}>
          <p className={classes.text}>Password :</p>
          <input
            className={classes.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className={classes.buttonGo} onClick={redirectToDashboard}>
          <Button text={"LET'S GO !"} fontSize={"20px"} />
        </div>
      </div>
      <div className={classes.buttonCreate}>
        <Link to={"/register"}>
          <Button text={"CREATE MY PROFILE"} fontSize={"20px"} />
        </Link>
      </div>
    </div>
  );
}

export default Login;
