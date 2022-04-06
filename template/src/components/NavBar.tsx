import React, {
  FunctionComponent, ReactElement, useContext, useState
} from "react";
import {
  Link
} from "react-router-dom";
import {
  Navbar
} from "react-bulma-components";
import { DarkModeStateContext } from "../contexts/DarkModeContext";
import NavBarItems from "./NavBarItems";
import NavBarDarkMode from "./NavBarDarkMode";
const NavBar: FunctionComponent = (): ReactElement => {
  const [active, setActive] = useState(false);
  const { darkMode } = useContext(DarkModeStateContext);
  return (
    <Navbar color={darkMode ? "primary" : "secondary"} active={active}>
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to="/">
          Home
        </Navbar.Item>
        <Navbar.Burger onClick={() => setActive(!active)} />
      </Navbar.Brand>
      <Navbar.Menu>
        <NavBarItems />
        <NavBarDarkMode />
      </Navbar.Menu>
    </Navbar>
  );
};
export default NavBar;
