import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    body: {
      height: "100vh",
      margin: 0,
      overflowX: "hidden",
      fontFamily: "Quicksand",
      background:
        "linear-gradient(50deg, rgba(20,0,68,1) 0%, rgba(214,247,255,1) 100%)",
      fallbacks: {
        background: "white",
      },
    },
  },
  mainContainer: {
    width: "100%",
  },
});

function Main(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.mainContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
