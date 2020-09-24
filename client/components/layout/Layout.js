import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen px-6 flex flex-col font-primary">
      <Header />
      <main className="px-0 flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
