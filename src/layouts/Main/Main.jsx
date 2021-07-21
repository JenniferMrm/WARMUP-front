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
    <div>
      <Header className={classes.mainContainer} />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
