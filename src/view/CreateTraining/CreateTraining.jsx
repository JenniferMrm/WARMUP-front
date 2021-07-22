import axios from "axios";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import Button from "../../common/Button";

const useStyles = createUseStyles({
  createTrainingContainer: {
    width: "100%",
    height: "cacl(100vh - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "50px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "50px",
    justifyContent: "end",
    marginTop: "50px",
  },
  textareaContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "130px",
    justifyContent: "end",
    marginTop: "50px",
  },
  text: {
    fontSize: "20px",
    marginRight: "30px",
  },
  input: {
    width: "50%",
    height: "45px",
  },
  textarea: {
    width: "50%",
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
});

function CreateTraining() {
  const classes = useStyles();
  const history = useHistory();
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });

  const redirectToDashboard = () => {
    history.push("/");
  };

  const handleChange = (e) => {
    if (e.target.name === "link") {
      const video =
        "https://www.youtube.com/embed/" + e.target.value.split("?v=")[1];
      setForm({ ...form, link: video });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_WARMUP_BACK_URL}/api/trainings`,
      form
    );
    redirectToDashboard();
  };

  return (
    <div className={classes.createTrainingContainer}>
      <h1 className={classes.title}>CREATE A NEW TRAINING</h1>
      <div className={classes.inputContainer}>
        <p className={classes.text}>Title of your training :</p>
        <input
          className={classes.input}
          onChange={handleChange}
          name="title"
          value={form.title}
        ></input>
      </div>
      <div className={classes.textareaContainer}>
        <p className={classes.text}>Description :</p>
        <textarea
          type="text"
          rows="7"
          cols="30"
          className={classes.textarea}
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={classes.inputContainer}>
        <p className={classes.text}>Youtube video link :</p>
        <input
          className={classes.input}
          onChange={handleChange}
          name="link"
          value={form.link}
        ></input>
      </div>
      <div onClick={handleClick} className={classes.button}>
        <Button text={"Create training"} fontSize={"20px"} />
      </div>
    </div>
  );
}

export default CreateTraining;
