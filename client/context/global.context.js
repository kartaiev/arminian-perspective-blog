import React, { createContext } from "react";
import { useToggle } from "../hooks/useToggle";

export const GlobalContext = createContext(undefined, undefined);

export const GlobalProvider = ({ children }) => {
  const {
    isToggled: isListView,
    setToggle: setListView,
    toggle: switchView,
  } = useToggle();

  return (
    <GlobalContext.Provider value={{ isListView, setListView, switchView }}>
      {children}
    </GlobalContext.Provider>
  );
};
