import Link from "next/link";
import { useRouter } from "next/router";
import { useToggle } from "../../hooks/useToggle";

const Nav = () => {
  const pathName = useRouter().pathname;

  const { isToggled, toggle } = useToggle();

  const pages = [
    { label: "статьи", path: "/" },
    { label: "об этом сайте", path: "/about" },
    { label: "утверждение веры", path: "/statement" },
    { label: "поддержи проект", path: "/give" },
  ];

  const links = pages.map(({ label, path }) => {
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
      <div className="h-10 lg:h-16 w-full border-b border-gray-300 flex items-center justify-center">
        <ul className="hidden list-none md:text-lg lg:text-xl xl:w-3/4 xl:px-12 h-full lg:flex lg:items-center lg:justify-around pr-0">
          {links}
        </ul>
        <button onClick={toggle} className="lg:hidden  focus:outline-none">
          меню
        </button>
      </div>
      {isToggled && (
        <ul className="h-26 py-2 flex items-center justify-center flex-wrap border-b border-gray-300">
          {links}
        </ul>
      )}
    </div>
  );
};

export default Nav;
