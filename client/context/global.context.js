import React, { createContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const GlobalContext = createContext(undefined, undefined);

export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
