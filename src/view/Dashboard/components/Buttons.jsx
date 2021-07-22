import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Button from "../../../common/Button";

const useStyles = createUseStyles({});

function Buttons({ ...trainingsInfos }) {
  const classes = useStyles();
  return (
    <div>
      {trainingsInfos.title ? (
        <div className={classes.buttonGo}>
          <Link to={"/training/" + trainingsInfos.id}>
            <Button
              text={"START TRAINING !"}
              fontSize={"20px"}
              backgroundColor={"lightblue"}
            />
          </Link>
        </div>
      ) : (
        <div className={classes.buttonNope}>
          <Button text={"START TRAINING !"} fontSize={"20px"} />
        </div>
      )}
    </div>
  );
}

export default Buttons;
