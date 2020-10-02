import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { handleScroll } from "../../lib/helpers";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
