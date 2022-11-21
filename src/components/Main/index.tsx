import Container from "components/Container";
import ProductDetails from "components/ProductDetails";
import SimilarProducts from "components/SimilarProducts";
import classes from "./styles.module.scss";
import { FC } from "react";
import { CartProduct } from "types/CartProduct";

interface MainProps {
  onAddToCart: (product: CartProduct) => void;
}

const Main: FC<MainProps> = ({ onAddToCart }) => {
  return (
    <main className={classes.root}>
      <Container>
        <ProductDetails onAddToCart={onAddToCart} />
        <SimilarProducts />
      </Container>
    </main>
  );
};
export default Main;
