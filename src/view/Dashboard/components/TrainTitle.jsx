import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../../../common/Button";

const useStyles = createUseStyles({
  listContainer: {
    width: "650px",
    height: "350px",
    border: "solid 1px black",
    overflowY: "scroll",
    overflowX: "hidden",
  },

  titleContainer: {
    width: "600px",
    height: "40px",
    border: "solid 1px black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px 0 10px",
  },
});

function TrainTitle({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.trainContainer}>
      <div className={classes.button}>
        <Button text={"CREATE A NEW TRAINING"} fontSize={"20px"} />
      </div>
      <div className={classes.listContainer}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>{title}</p>
          <div className={classes.iconContainer}>
            <i
              class="fa fa-cog"
              style={{ fontSize: "25px", color: "black" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainTitle;
