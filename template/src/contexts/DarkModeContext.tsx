import React, { FC, ReactElement, useState } from "react";
import { DarkModeContext } from "./Contexts";
const DarkModeContextWrapper: FC = ({ children }): ReactElement => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode") || "false"));
  const toggleDarkMode = () => {
    localStorage.setItem("DarkMode", JSON.stringify(!darkMode));
    return setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeContextWrapper;
