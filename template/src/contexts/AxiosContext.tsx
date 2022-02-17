import axios from "axios";
import React, { FC, ReactElement } from "react";
import config from "../config/config";
import { AxiosContext } from "./Contexts";
const AxiosContextWrapper: FC = ({ children }): ReactElement => {
  // Multiple axios instances with different configs can be created,
  // and passed to the underlying child components.
  const instance = axios.create({
    baseURL: config.axios.baseURL,
    timeout: config.axios.timeout
  });
  return (
    <AxiosContext.Provider value={{ axios: instance }}>
      {children}
    </AxiosContext.Provider>
  );
};
export default AxiosContextWrapper;
