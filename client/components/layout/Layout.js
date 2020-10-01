import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { handleScroll } from "../../lib/helpers";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-0 md:px-16 lg:px-0 mb-24 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
