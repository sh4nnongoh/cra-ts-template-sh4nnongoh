import React, { FunctionComponent, ReactElement, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Container, Navbar, Button, Image
} from "react-bulma-components";
import Home from "./Home/Home";
import TestState from "./TestState/TestState";
import "./App.autogen.css";
import TestURLState from "./TestURLState/TestURLState";
import DarkModeToggle from "./assets/darkmode.png";
const App: FunctionComponent = (): ReactElement => {
  const [value, setValue] = useState("Default State");
  return (
    <div className=".app has-background-dark has-text-light">
      <Router>
        <Navbar color="primary">
          <Navbar.Brand>
            <Navbar.Item renderAs={Link} to="/">
              Home
            </Navbar.Item>
          </Navbar.Brand>
          <Navbar.Container align="left">
            <Navbar.Item renderAs={Link} to="/test-state" textColor="dark">
              Test State
            </Navbar.Item>
            <Navbar.Item renderAs={Link} to="/test-url-state/" textColor="dark">
              Test URL State
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container align="right">
            <Navbar.Item renderAs={Button}>
              <Image src={DarkModeToggle} alt="DarkModeToggle" />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar>
        <Container className="app">
          <Switch>
            <Route path="/test-state">
              <TestState value={value} setValue={setValue} />
            </Route>
            <Route path="/test-url-state/:state?/">
              <TestURLState />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};
export default App;
