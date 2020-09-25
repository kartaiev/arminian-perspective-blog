import { useState } from "react";

export const useToggle = (initial = false) => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle((state) => !state);
  return { isToggled, setToggle, toggle };
};
