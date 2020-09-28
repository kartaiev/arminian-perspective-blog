import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

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
