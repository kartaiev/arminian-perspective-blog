import navPages from "../../lib/navPages";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = () => {
  const pathName = useRouter().pathname;

  return navPages.map(({ label, path }) => {
    return (
      <li
        key={path}
        className={
          pathName === path ? "active" : "inactive hover:border-gray-400"
        }
      >
        <Link href={path}>
          <a className="border-none">{label}</a>
        </Link>
      </li>
    );
  });
};

export default navLinks;
