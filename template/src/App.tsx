import React, { FunctionComponent, ReactElement, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Button } from "react-bulma-components";
import Home from "./Home/Home";
import TestState from "./TestState/TestState";
import "bulma/css/bulma.min.css";
import "./App.css";
const App: FunctionComponent = (): ReactElement => {
  const [value, setValue] = useState("Default State");
  return (
    <div>
      <Router>
        <Navbar color="primary">
          <Navbar.Container>
            <Navbar.Item renderAs={Link} to="/">
              Home
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to="/test-state" textColor="dark">
              Test State
            </Navbar.Item>
          </Navbar.Container>
        </Navbar>
        <Switch>
          <Route path="/test-state">
            <TestState value={value} setValue={setValue} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div className="app" />
    </div>
  );
};
export default App;
