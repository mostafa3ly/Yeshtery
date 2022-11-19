import { FC, Fragment } from "react";
import classes from "./styles.module.scss";
import Container from "components/Container";

const ITEMS = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-Shirt"];
const Breadcrumb: FC = () => {
  const renderItems = (): JSX.Element[] =>
    ITEMS.map((item, index) => {
      return (
        <Fragment>
          <div key={item}>
            <a href="/">{item}</a>
          </div>
        </Fragment>
      );
    });

  return (
    <nav className={classes.root}>
      <Container>
        <div className={classes.content}>{renderItems()}</div>
      </Container>
    </nav>
  );
};
export default Breadcrumb;
