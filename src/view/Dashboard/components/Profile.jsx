import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profileContainer: {
    border: "solid 1px black",
    display: "flex",
    height: "200px",
    width: "300px",
    flexDirection: "column",
    justifyContent: "start",
    padding: "10px",
  },

  avatarAndNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },

  name: {
    marginLeft: "100px",
  },

  avatar: {
    width: "100px",
    borderRadius: "100%",
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <div className={classes.avatarAndNameContainer}>
        <img
          src="https://source.unsplash.com/0fJKvGUDztg"
          alt="avatar"
          className={classes.avatar}
        />
        <p className={classes.name}>Name</p>
      </div>
      <p>Plays bass for 2 months</p>
      <p>Total training time :</p>
    </div>
  );
}

export default Profile;
