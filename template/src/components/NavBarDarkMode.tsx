import React, {
  FunctionComponent, ReactElement, useContext
} from "react";
import {
  Navbar, Button, Image
} from "react-bulma-components";
import DarkModeToggle from "../assets/darkmode.png";
import { DarkModeSetStateContext } from "../contexts/DarkModeContext";
const NavBarDarkMode: FunctionComponent = (): ReactElement => {
  const toggleDarkMode = useContext(DarkModeSetStateContext);
  return (
    <Navbar.Item renderAs={Button} onClick={toggleDarkMode} text>
      <Image src={DarkModeToggle} alt="DarkModeToggle" />
    </Navbar.Item>
  );
};
export default NavBarDarkMode;
