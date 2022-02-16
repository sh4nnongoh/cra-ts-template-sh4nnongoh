import axios from "axios";
import React, { FC, ReactElement } from "react";
import { AxiosContext } from "./contexts";
const AxiosContextWrapper: FC = ({ children }): ReactElement => {
  // Multiple axios instances with different configs can be created,
  // and passed to the underlying child components.
  const instance = axios.create({
    baseURL: "http://localhost:8080/https://ftx.com/api/",
    timeout: 2500
  });
  return (
    <AxiosContext.Provider value={{ axios: instance }}>
      {children}
    </AxiosContext.Provider>
  );
};
export default AxiosContextWrapper;
