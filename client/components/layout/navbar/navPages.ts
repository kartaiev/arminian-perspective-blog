import { useContext } from "react";
import { IPAD_BREAKPOINT } from "../../../lib/vars";
import { GlobalContext } from "../../../context/globalContext";
import { fullNavPages, shortNavPages } from "../../../lib/pages";

export default () => {
  const { width } = useContext(GlobalContext);

  return width > IPAD_BREAKPOINT ? shortNavPages : fullNavPages;
};
