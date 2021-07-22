import axios from "axios";
import React, { useEffect, useState } from "react";
import TrainTitle from "./TrainTitle";
import { createUseStyles } from "react-jss";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  trainingListContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 350px)",
    marginRight: "50px",
  },

  listContainer: {
    width: "765px",
    height: "350px",
    overflowY: "scroll",
    overflowX: "hidden",
    background: "#d6f0ff",
  },

  createButton: {
    marginBottom: "50px",
  },
});

function TrainingList({ onClick }) {
  const classes = useStyles();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const getTrainings = () => {
      try {
        axios
          .get(`${process.env.REACT_APP_WARMUP_BACK_URL}/api/trainings`)
          .then((response) => response.data)
          .then((data) => {
            setTrainings(data);
          });
      } catch (e) {
        //err
      }
    };
    getTrainings();
  }, []);

  return (
    <div className={classes.trainingListContainer}>
      <div className={classes.createButton}>
        <Link to={"/createTraining/"}>
          <Button text={"CREATE A NEW TRAINING"} fontSize={"20px"} />
        </Link>
      </div>
      <div className={classes.listContainer}>
        {trainings.map((training, index) => (
          <TrainTitle
            key={index}
            index={index}
            {...training}
            onClick={() => onClick(training)}
          />
        ))}
      </div>
    </div>
  );
}

export default TrainingList;
