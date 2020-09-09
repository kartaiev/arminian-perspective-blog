import Nav from "./Nav";

const Header = () => {
  return (
    <div className="w-full header row-span-1">
      <div className="w-11/12 flex justify-between items-center">
        <div>Арминианская перспектива</div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
