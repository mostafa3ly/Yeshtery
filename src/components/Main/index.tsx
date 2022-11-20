import Container from "components/Container";
import ProductDetails from "components/ProductDetails";
import SimilarProducts from "components/SimilarProducts";
import classes from "./styles.module.scss";
import { FC } from "react";

const Main: FC = () => {
  return (
    <main className={classes.root}>
      <Container>
        <ProductDetails />
        <SimilarProducts />
      </Container>
    </main>
  );
};
export default Main;
