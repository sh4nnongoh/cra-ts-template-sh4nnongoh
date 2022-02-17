import React, { FC, ReactElement, useState } from "react";
import { DarkModeContext } from "./Contexts";
const DarkModeContextWrapper: FC = ({ children }): ReactElement => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeContextWrapper;
