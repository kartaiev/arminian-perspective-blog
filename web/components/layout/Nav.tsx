import Link from "next/link";
import { useRouter } from "next/router";
import { useToggle } from "../../hooks/useToggle";
import React from "react";
import navPages from "../../lib/navPages";

const Nav: React.FC = () => {
  const pathName = useRouter().pathname;

  const { isToggled: isOpen, toggle: openNav } = useToggle();

  const links = navPages.map(({ label, path }) => {
    return (
      <li
        key={path}
        className={
          pathName === path ? "active" : "inactive hover:border-gray-300"
        }
      >
        <Link href={path}>
          <a className="border-none">{label}</a>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <div className="nav-container lg:h-16">
        <ul className="nav-list md:text-lg lg:text-xl xl:w-3/4 xl:px-12 lg:flex lg:items-center lg:justify-around">
          {links}
        </ul>
        <button onClick={openNav} className="lg:hidden  focus:outline-none">
          меню
        </button>
      </div>
      {isOpen && (
        <ul className="h-26 py-2 flex list-none items-center justify-center flex-wrap border-b border-gray-300">
          {links}
        </ul>
      )}
    </div>
  );
};

export default Nav;
