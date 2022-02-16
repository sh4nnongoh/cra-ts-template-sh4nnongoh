import axios, { AxiosInstance } from "axios";
import { createContext } from "react";
export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {
    // stub
  }
});
export const AxiosContext = createContext<{axios?: AxiosInstance}>({});
