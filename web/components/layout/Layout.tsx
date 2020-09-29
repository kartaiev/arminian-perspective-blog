import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-0 md:px-16 lg:px-0 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
