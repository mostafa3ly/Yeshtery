import { FC } from "react";
import classes from "./styles.module.scss";
import Gallery from "components/Gallery";
import ProductInfo from "components/ProductInfo";
import { CartProduct } from "types/CartProduct";

interface ProductDetailsProps {
  onAddToCart: (product: CartProduct) => void;
}

const ProductDetails: FC<ProductDetailsProps> = ({onAddToCart}) => {
  return (
    <div className={classes.root}>
      <Gallery />
      <ProductInfo onAddToCart={onAddToCart}/>
    </div>
  );
};
export default ProductDetails;
