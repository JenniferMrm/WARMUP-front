import axios from "axios";
import React, { useEffect, useState } from "react";
import TrainTitle from "./TrainTitle";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

function TrainingList() {
  const classes = useStyles();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const getTrainings = () => {
      try {
        axios
          .get("http://localhost:8000/api/trainings")
          .then((response) => response.data)
          .then((data) => {
            setTrainings(data);
            console.log(data);
          });
      } catch (e) {
        //err
      }
    };
    getTrainings();
  }, []);

  return (
    <div className={classes.trainingListContainer}>
      {trainings.map((training, index) => (
        <TrainTitle key={index} index={index} {...training} />
      ))}
    </div>
  );
}

export default TrainingList;
