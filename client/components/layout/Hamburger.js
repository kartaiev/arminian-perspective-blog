import React, { useContext } from "react";
import { GlobalContext } from "../../context/global.context";

const Hamburger = () => {
  const { open } = useContext(GlobalContext);

  return (
    <button
      onClick={open}
      className="h-full w-5 outline-none z-40 flex flex-col justify-center xl:hidden"
    >
      <div className="h-mk w-full mb-1 bg-gray-600" />
      <div className="h-mk w-full mb-1 bg-gray-600" />
      <div className="h-mk w-full bg-gray-600" />
    </button>
  );
};

export default Hamburger;
