import { useToggle } from "../../hooks/useToggle";
import navLinks from "./navLinks";

const Nav = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <div className="h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center">
        <ul className="hidden list-none md:text-lg lg:text-xl xl:w-3/4 xl:px-12 h-full lg:flex lg:items-center lg:justify-around pr-0">
          {navLinks()}
        </ul>
        <button onClick={toggle} className="lg:hidden  focus:outline-none">
          меню
        </button>
      </div>
      {isToggled && (
        <ul className="h-26 py-2 list-none flex items-center justify-center flex-wrap border-b border-gray-300">
          {navLinks()}
        </ul>
      )}
    </div>
  );
};

export default Nav;
