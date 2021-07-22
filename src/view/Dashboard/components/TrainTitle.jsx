import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  trainContainer: {
    width: "700px",
    height: "40px",
    border: "solid 1px black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px 0 10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

function TrainTitle({ title, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.trainContainer} onClick={onClick}>
      <p className={classes.title}>{title}</p>
      <div className={classes.iconContainer}>
        <i class="fa fa-cog" style={{ fontSize: "25px", color: "black" }}></i>
      </div>
    </div>
  );
}

export default TrainTitle;
