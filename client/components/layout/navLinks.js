import navPages from "../../lib/navPages";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = () => {
  const pathName = useRouter().pathname;

  return navPages.map(({ label, path }) => {
    const linkClass = pathName === path ? "link-active" : "link-inactive";

    return (
      <li key={path} className={`link ${linkClass}`}>
        <Link href={path}>
          <a className="border-none">{label}</a>
        </Link>
      </li>
    );
  });
};

export default navLinks;
