import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 150px)",
    justifyContent: "space-around",
    alignItems: "start",
    marginLeft: "50px",
  },

  profileInfos: {
    background: "#d6f0ff",
    display: "flex",
    height: "300px",
    width: "500px",
    flexDirection: "column",
    justifyContent: "start",
    padding: "30px",
    marginBottom: "100px",
  },

  avatarAndNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },

  name: {
    marginLeft: "100px",
    fontSize: "40px",
  },

  avatar: {
    width: "100px",
    borderRadius: "100%",
  },

  title: {
    fontSize: "50px",
    marginTop: "120px",
  },

  text: {
    fontSize: "20px",
  },
});

function Profile({ name, instrument, experience, training_time, src }) {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <h2 className={classes.title}>DASHBOARD</h2>
      <div className={classes.profileInfos}>
        <div className={classes.avatarAndNameContainer}>
          <img src={src} alt="avatar" className={classes.avatar} />
          <p className={classes.name}>{name}</p>
        </div>
        <p className={classes.text}>
          Plays {instrument} for {experience}.
        </p>
        <p className={classes.text}>Total training time : {training_time}</p>
      </div>
    </div>
  );
}

export default Profile;
