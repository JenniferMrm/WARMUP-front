import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  trainingContainer: {
    border: "1px solid black",
    width: "70%",
    margin: "0 auto",
    height: "calc(100vh - 150px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: "50px",
  },
  description: {
    marginBottom: "50px",
  },
});

function Training({ match }) {
  const classes = useStyles();
  const [training, setTraining] = useState([]);

  useEffect(() => {
    const getTraining = () => {
      try {
        axios
          .get(
            `${process.env.REACT_APP_WARMUP_BACK_URL}/api/trainings/${match?.params?.id}`
          )
          .then((response) => response.data)
          .then((data) => {
            setTraining(data[0]);
            console.log(data);
          });
      } catch (e) {
        //err
      }
    };
    getTraining();
  }, []);

  return (
    <div className={classes.trainingContainer}>
      <h1 className={classes.title}>{training.title}</h1>
      <p className={classes.description}>{training.description}</p>
      <p className={classes.video}>{training.link}</p>
    </div>
  );
}

export default Training;
