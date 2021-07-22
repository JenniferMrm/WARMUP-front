import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import Button from "../../common/Button";

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
  buttonContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
});

function Training({ match }) {
  const classes = useStyles();
  const [training, setTraining] = useState([]);
  const history = useHistory();

  const redirectToDashboard = () => {
    console.log("je suis fatiguée");
    history.push("/");
  };

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
          });
      } catch (e) {
        //err
      }
    };
    getTraining();
  }, [match?.params?.id]);

  return (
    <div className={classes.trainingContainer}>
      <h1 className={classes.title}>{training.title}</h1>
      <p className={classes.description}>{training.description}</p>
      <Fragment>
        <iframe
          width="670"
          height="315"
          src={training.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Fragment>
      <div className={classes.buttonContainer}>
        <div onClick={redirectToDashboard}>
          <Button text={"Training over !"} fontSize={"20px"} />
        </div>
      </div>
    </div>
  );
}

export default Training;
