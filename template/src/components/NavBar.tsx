import React, {
  FunctionComponent, ReactElement, useContext
} from "react";
import {
  Link
} from "react-router-dom";
import {
  Navbar, Button, Image
} from "react-bulma-components";
import DarkModeToggle from "../assets/darkmode.png";
import { DarkModeContext } from "../contexts/contexts";
const NavBar: FunctionComponent = (): ReactElement => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <Navbar color={darkMode ? "primary" : "secondary"}>
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
        <Navbar.Item renderAs={Button} onClick={toggleDarkMode}>
          <Image src={DarkModeToggle} alt="DarkModeToggle" />
        </Navbar.Item>
      </Navbar.Container>
    </Navbar>
  );
};
export default NavBar;
