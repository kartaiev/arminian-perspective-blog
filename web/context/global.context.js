import React, { createContext } from "react";

export const GlobalContext = createContext(undefined, undefined);

export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
