import React, {
  FC, ReactElement, useState, useContext
} from "react";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import {
  Container
} from "react-bulma-components";
import Home from "./views/Home";
import TestState from "./views/TestState";
import TestURLState from "./views/TestURLState";
import NavBar from "./components/NavBar";
import "./App.autogen.css";
import BTC from "./views/BTC";
import { DarkModeStateContext } from "./contexts/DarkModeContext";
import AxiosContextWrapper from "./contexts/AxiosContext";
const App: FC = (): ReactElement => {
  const [value, setValue] = useState("Default State");
  const { darkMode } = useContext(DarkModeStateContext);
  return (
    <AxiosContextWrapper>
      <Router>
        <div className={`
            ${darkMode ? "has-background-dark" : "has-background-light"} 
            ${darkMode ? "has-text-light" : "has-text-dark"}`}
        >
          <NavBar />
          <Container className="app">
            <Routes>
              <Route path="/BTC" element={<BTC />} />
              <Route path="/test-state" element={<TestState value={value} setValue={setValue} />} />
              <Route path="/test-url-state" element={<TestURLState />}>
                <Route path=":state" element={<TestURLState />} />
              </Route>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </AxiosContextWrapper>
  );
};
export default App;
