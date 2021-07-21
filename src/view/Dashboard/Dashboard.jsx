import React from "react";
import Profile from "./components/Profile";
import TrainingList from "./components/TrainingList";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dashboardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "80vh",
  },
});

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.dashboardContainer}>
      <Profile />
      <TrainingList />
    </div>
  );
}

export default Dashboard;
