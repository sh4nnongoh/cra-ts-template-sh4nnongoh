import React, { FC, ReactElement, useState } from "react";
import { DarkModeContext } from "./contexts";
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
