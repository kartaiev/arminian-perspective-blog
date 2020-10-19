import React, { createContext } from "react";
import { useToggle } from "../hooks/useToggle";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const GlobalContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const width = useWindowWidth();

  const {
    isToggled: isListView,
    setToggle: setListView,
    toggle: switchView,
  } = useToggle();

  return (
    <GlobalContext.Provider
      value={{ width, isListView, setListView, switchView }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
