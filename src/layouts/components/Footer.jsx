import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "fixed",
    height: "50px",
    borderTop: "1px solid black",
    bottom: 0,
  },

  copyright: {},
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <p className={classes.copyright}>WARM UP 2021 - All rights reserved</p>
    </div>
  );
}

export default Footer;
