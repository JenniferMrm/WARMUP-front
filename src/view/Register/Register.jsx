import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import AvatarList from "./components/AvatarList";

const useStyles = createUseStyles({
  registerContainer: {
    width: "100%",
    height: "calc(100vh - 150px)",
  },

  title: {
    fontSize: "40px",
    textAlign: "center",
    margin: "100px 0",
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
});

function Register() {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    password: "",
    instrument: "",
    experience: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <AvatarList />
      </div>
    </div>
  );
}

export default Register;
