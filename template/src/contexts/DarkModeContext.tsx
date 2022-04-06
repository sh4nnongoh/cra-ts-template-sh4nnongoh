import React, {
  createContext, FC, ReactElement, useCallback, useMemo, useState
} from "react";
export const DarkModeStateContext = createContext({
  darkMode: false
});
export const DarkModeSetStateContext = createContext(() => { /* stub */ });
// Reference to how one should use useContext:
// https://stackoverflow.com/questions/54119268/how-to-use-react-hooks-context-with-multiple-values-for-providers
const DarkModeContextWrapper: FC = ({ children }): ReactElement => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode") || "false"));
  const toggleDarkMode = useCallback(() => {
    localStorage.setItem("DarkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }, [darkMode]);
  return (
    <DarkModeStateContext.Provider value={useMemo(() => ({
      darkMode
    }), [darkMode])}
    >
      <DarkModeSetStateContext.Provider value={toggleDarkMode}>
        {children}
      </DarkModeSetStateContext.Provider>
    </DarkModeStateContext.Provider>
  );
};
export default DarkModeContextWrapper;
