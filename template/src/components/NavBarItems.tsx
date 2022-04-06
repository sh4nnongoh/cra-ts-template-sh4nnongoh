import React, {
  FunctionComponent, ReactElement, useContext
} from "react";
import {
  Link
} from "react-router-dom";
import {
  Navbar
} from "react-bulma-components";
import { DarkModeStateContext } from "../contexts/DarkModeContext";
const NavBarItems: FunctionComponent = (): ReactElement => {
  const { darkMode } = useContext(DarkModeStateContext);
  return (
    <Navbar.Container align="left">
      <Navbar.Item renderAs={Link} to="/test-state" textColor={darkMode ? "secondary" : "primary"}>
        Test State
      </Navbar.Item>
      <Navbar.Item renderAs={Link} to="/test-url-state/" textColor={darkMode ? "secondary" : "primary"}>
        Test URL State
      </Navbar.Item>
      <Navbar.Item renderAs={Link} to="/BTC/" textColor={darkMode ? "secondary" : "primary"}>
        BTC
      </Navbar.Item>
    </Navbar.Container>
  );
};
export default NavBarItems;
