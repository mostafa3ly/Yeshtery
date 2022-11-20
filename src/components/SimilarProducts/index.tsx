import { FC } from "react";
import classes from "./styles.module.scss";
import SimilarProduct from "components/SimilarProduct";
import products from "mocks/products";

const SimilarProducts: FC = () => {
  const renderProducts = (): JSX.Element[] =>
    products.map((product) => (
      <SimilarProduct key={product.id} product={product} />
    ));
  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Similar Products</h3>
      <h4 className={classes.subtitle}>You may like these products also</h4>
      <div className={classes.list}>{renderProducts()}</div>
    </div>
  );
};
export default SimilarProducts;
