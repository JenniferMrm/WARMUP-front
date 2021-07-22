import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./layouts/Main/Main";
import Login from "./view/Login/Login";
import Register from "./view/Register/Register";
import Dashboard from "./view/Dashboard/Dashboard";
import Training from "./view/Training/Training";
import CreateTraining from "./view/CreateTraining/CreateTraining";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <Main>
              <Login />
            </Main>
          )}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <Main>
              <Register />
            </Main>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Main>
              <Dashboard />
            </Main>
          )}
        />
        <Route
          exact
          path="/training/:id"
          render={(matchProps) => (
            <Main>
              <Training {...matchProps} />
            </Main>
          )}
        />
        <Route
          exact
          path="/createTraining"
          render={() => (
            <Main>
              <CreateTraining />
            </Main>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
