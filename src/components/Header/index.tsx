import { FC } from "react";
import Headbar from "components/Headbar";
import Toolbar from "components/Toolbar";

const Header: FC = () => {
  return (
    <header>
      <Headbar />
      <Toolbar />
    </header>
  );
};
export default Header;
