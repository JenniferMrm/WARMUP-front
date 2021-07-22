import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Avatar from "./Avatar";

const useStyles = createUseStyles({
  avatarListContainer: {
    width: "90%",
    height: "130px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  text: {
    fontSize: "20px",
    marginRight: "25px",
  },
});

function AvatarList({ setAvatarId }) {
  const classes = useStyles();

  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const getAvatars = () => {
      try {
        axios
          .get(`${process.env.REACT_APP_WARMUP_BACK_URL}/api/avatars`)
          .then((response) => response.data)
          .then((data) => {
            setAvatars(data);
          });
      } catch (e) {
        //err
      }
    };
    getAvatars();
  }, []);

  return (
    <div className={classes.avatarListContainer}>
      <p className={classes.text}>Choose your avatar :</p>
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          index={index}
          {...avatar}
          setAvatarId={setAvatarId}
        />
      ))}
    </div>
  );
}

export default AvatarList;
