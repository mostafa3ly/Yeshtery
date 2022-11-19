import { FC } from "react";
import Headbar from "components/Headbar";
import Toolbar from "components/Toolbar";
import Navbar from "components/Navbar";
import Breadcrumb from "components/Breadcrumb";

const Header: FC = () => {
  return (
    <header>
      <Headbar />
      <Toolbar />
      <Navbar />
      <Breadcrumb />
    </header>
  );
};
export default Header;
