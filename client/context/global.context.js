import React, { createContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const GlobalContext = createContext(undefined, undefined);

export const GlobalProvider = ({ children }) => {
  const pathName = useRouter().pathname;

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
    <GlobalContext.Provider value={{ links, pathName }}>
      {children}
    </GlobalContext.Provider>
  );
};
