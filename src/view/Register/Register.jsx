import axios from "axios";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import Button from "../../common/Button";
import AvatarList from "./components/AvatarList";

const useStyles = createUseStyles({
  registerContainer: {
    width: "100%",
    height: "calc(100vh - 150px)",
    overflow: "hidden",
  },

  title: {
    fontSize: "40px",
    textAlign: "center",
    margin: "150px 0",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
  },

  pseudoAndPasswordContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: "30px",
  },

  instrumentAndXPContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "end",
  },

  input: {
    height: "40px",
    width: "70%",
  },

  selectInput: {
    height: "40px",
    width: "394px",
    fontSize: "18px",
  },

  text: {
    fontSize: "18px",
    marginRight: "20px",
  },

  button: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
});

function Register() {
  const classes = useStyles();
  const [avatarId, setAvatarId] = useState([]);
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    password: "",
    instrument: "",
    experience: "",
    avatar: { avatarId },
  });

  const redirectToLogin = () => {
    history.push("/login");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_WARMUP_BACK_URL}/api/users`,
      form
    );
    redirectToLogin();
    console.log(avatarId);
  };

  return (
    <div className={classes.registerContainer}>
      <h1 className={classes.title}>CREATE YOUR PROFILE</h1>
      <div className={classes.formContainer}>
        <div className={classes.pseudoAndPasswordContainer}>
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
        </div>
        <div className={classes.instrumentAndXPContainer}>
          <div className={classes.inputContainer}>
            <p className={classes.text}>Instrument :</p>
            <form className={classes.formInput}>
              <select
                className={classes.selectInput}
                type="select"
                name="instrument"
                value={form.instrument}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="bass">Bass</option>
                <option value="guitar">Guitar</option>
                <option value="drums">Drums</option>
              </select>
            </form>
          </div>
          <div className={classes.inputContainer}>
            <p className={classes.text}>For how long :</p>
            <input
              className={classes.input}
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <AvatarList setAvatarId={setAvatarId} />
      </div>
      <div className={classes.button}>
        <div onClick={handleClick}>
          <Button text={"Done !"} fontSize={"20px"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Register;
