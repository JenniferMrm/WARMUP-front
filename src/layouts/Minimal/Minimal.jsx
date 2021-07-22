import React from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/Footer";

const useStyles = createUseStyles({
  "@global": {
    body: {
      height: "100vh",
      margin: 0,
      overflowX: "hidden",
    },
  },
  minimalContainer: {
    width: "100%",
  },
});

function Minimal(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.minimal}>
      {children}
      <Footer />
    </div>
  );
}

export default Minimal;
