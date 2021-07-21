import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
  },

  profileInfos: {
    border: "solid 1px black",
    display: "flex",
    height: "300px",
    width: "400px",
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

  title: {
    fontSize: "30px",
  },
});

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <h2 className={classes.title}>DASHBOARD</h2>
      <div className={classes.profileInfos}>
        <div className={classes.avatarAndNameContainer}>
          <img
            src="https://source.unsplash.com/0fJKvGUDztg/800x800"
            alt="avatar"
            className={classes.avatar}
          />
          <p className={classes.name}>Name</p>
        </div>
        <p>Plays bass for 2 months</p>
        <p>Total training time :</p>
      </div>
    </div>
  );
}

export default Profile;
