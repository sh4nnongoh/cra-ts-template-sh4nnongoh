import React, {
  FunctionComponent, ReactElement, useState, useContext
} from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import {
  Container
} from "react-bulma-components";
import Home from "./views/Home";
import TestState from "./views/TestState";
import TestURLState from "./views/TestURLState";
import { DarkModeContext } from "./contexts/contexts";
import NavBar from "./components/NavBar";
import "./App.autogen.css";
const App: FunctionComponent = (): ReactElement => {
  const [value, setValue] = useState("Default State");
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Router>
      <div className={`
        ${darkMode ? "has-background-dark" : "has-background-light"} 
        ${darkMode ? "has-text-light" : "has-text-dark"}`}
      >
        <NavBar />
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
      </div>
    </Router>
  );
};
export default App;
