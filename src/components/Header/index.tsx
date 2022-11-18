import { FC } from "react";
import Headbar from "components/Headbar";
import Toolbar from "components/Toolbar";
import Navbar from "components/Navbar";

const Header: FC = () => {
  return (
    <header>
      <Headbar />
      <Toolbar />
      <Navbar />
    </header>
  );
};
export default Header;
