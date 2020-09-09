import { Link } from 'next/link';

const Nav = () => {
  const pages = {
    blog: 'блог',
    about: 'об этом блоге',
    statement: 'утверждение веры',
  };

  const links = Object.keys(pages).map((link) => {
    return (
      <li className='p-4' key={link}>
        <Link href={link === 'blog' ? '/' : `/${link}`}>
          <a>{pages[link]}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
};

export default Nav;
