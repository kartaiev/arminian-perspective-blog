import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
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
