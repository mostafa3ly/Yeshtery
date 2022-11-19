import { FC } from "react";
import classes from "./styles.module.scss";
import Gallery from "components/Gallery";
import ProductInfo from "components/ProductInfo";


const ProductDetails: FC = () => {
  return (
    <div className={classes.root}>
      <Gallery />
      <ProductInfo />
    </div>
  );
};
export default ProductDetails;
