import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  avatar: {
    height: "100px",
    borderRadius: "100%",
    marginRight: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

function Avatar({ index, src, setAvatarId }) {
  const classes = useStyles();

  const handleClick = async () => {
    await setAvatarId(index);
    console.log(index);
  };

  return (
    <div className={classes.avatarContainer} onClick={handleClick}>
      <img src={src} alt={`avatar${index}`} className={classes.avatar} />
    </div>
  );
}

export default Avatar;
