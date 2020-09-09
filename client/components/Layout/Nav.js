import Link from "next/link";
const pages = {
  blog: "блог",
  about: "об этом блоге",
  statement: "утверждение веры",
};

const links = Object.keys(pages).map((link) => {
  return (
    <li className="pl-4 font-bold " key={link}>
      <Link href={link === "blog" ? "/" : `/${link}`}>
        <a>{pages[link]}</a>
      </Link>
    </li>
  );
});

const Nav = () => {
  return (
    <nav className="uppercase tracking-wide">
      <ul className="flex">{links}</ul>
    </nav>
  );
};

export default Nav;
