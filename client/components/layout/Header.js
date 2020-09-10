import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { GlobalContext } from "../../context/global.context";

const Header = () => {
  const { isOpened } = useContext(GlobalContext);

  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  const shadow = isOpened || pos === "moved" ? "shadow-md" : "";
  return (
    <div className={`header ${shadow}`}>
      <div className="w-11/12 flex justify-between items-center">
        <div className="text-gray-900 font-bold text-2xl xl:text-5xl font-logo">
          Арминианская перспектива
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
