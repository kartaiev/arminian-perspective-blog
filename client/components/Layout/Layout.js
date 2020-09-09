import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="grid flex flex-col h-full">
      <Header />
      <main className="mt-20 row-span-auto h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
