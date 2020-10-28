import React, { createContext } from "react";
import { useToggle } from "../hooks/useToggle";
import { useWindowSize } from "../hooks/useWindowSize";

export const GlobalContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const width = useWindowSize().width;
  console.log(width);

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
