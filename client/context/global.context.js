import React, { createContext, useState } from "react";
import Link from "next/link";

export const GlobalContext = createContext(undefined, undefined);

export const GlobalProvider = ({ children }) => {
  const [isOpened, setOpen] = useState(false);

  const open = () => {
    setOpen(!isOpened);
    console.log(isOpened);
  };

  const pages = {
    blog: "блог",
    about: "об этом блоге",
    statement: "утверждение веры",
    give: "поддержи проект",
  };

  const links = Object.keys(pages).map((link) => {
    return (
      <li className="pb-12 lg:pl-4 " key={link}>
        <Link href={link === "blog" ? "/" : `/${link}`}>
          <a>{pages[link]}</a>
        </Link>
      </li>
    );
  });

  console.log(links);

  return (
    <GlobalContext.Provider value={{ links, open, isOpened }}>
      {children}
    </GlobalContext.Provider>
  );
};
