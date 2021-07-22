import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import TrainingList from "./components/TrainingList";
import { createUseStyles } from "react-jss";
import axios from "axios";
import Buttons from "./components/Buttons";

const useStyles = createUseStyles({
  dashboardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "calc(100vh - 350px)",
  },

  button: {
    width: "92%",
    display: "flex",
    justifyContent: "end",
    paddingRight: "50px",
  },
});

function Dashboard() {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  const [trainingsInfos, setTrainingsInfos] = useState([]);

  const handleClick = (training) => {
    setTrainingsInfos(training);
    console.log(training);
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
    <div>
      <div className={classes.dashboardContainer}>
        <Profile {...user} />
        <TrainingList onClick={handleClick} />
      </div>
      <div className={classes.button}>
        <Buttons {...trainingsInfos} />
      </div>
    </div>
  );
}

export default Dashboard;
