import { FC } from "react";
import classes from "./styles.module.scss";
import Container from "components/Container";

const ITEMS = [
  "Men",
  "Women",
  "Unisex",
  "Kids",
  "Best Sellers",
  "New Arrivals",
  "Offers",
];

const Navbar: FC = () => {
  const link = "Offers";

  const renderItems = (): JSX.Element[] =>
    ITEMS.map((item) => (
      <li key={item} className={link === item ? classes.active : ""}>
        <a href="/">{item}</a>
      </li>
    ));

  return (
    <nav className={classes.root}>
      <Container>
        <ul className={classes.list}>{renderItems()}</ul>
      </Container>
    </nav>
  );
};
export default Navbar;
