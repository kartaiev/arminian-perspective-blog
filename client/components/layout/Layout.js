import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="mt-20 row-span-auto font-menu">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
