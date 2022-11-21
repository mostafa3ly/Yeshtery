import { FC } from "react";
import Headbar from "components/Headbar";
import Toolbar from "components/Toolbar";
import Navbar from "components/Navbar";
import Breadcrumb from "components/Breadcrumb";

interface HeaderProps {
  items: number;
  onOpenCart: () => void;
}

const Header: FC<HeaderProps> = ({ items, onOpenCart }) => {
  return (
    <header>
      <Headbar />
      <Toolbar items={items} onOpenCart={onOpenCart} />
      <Navbar />
      <Breadcrumb />
    </header>
  );
};
export default Header;
