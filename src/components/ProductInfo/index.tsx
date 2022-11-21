import { ChangeEvent, FC, useState } from "react";
import classes from "./styles.module.scss";
import Black from "images/black.png";
import Red from "images/red.png";
import Button from "components/Button";
import Adidas from "images/adidas.png";
import Quantity from "components/Quantity";
import RatingBar from "components/RatingBar";
import { CartProduct } from "types/CartProduct";
import Thumbnail from "images/image1.png";

const SIZES = ["Small", "Medium", "Large", "X Large", "XX Large"];

interface ProductInfoProps {
  onAddToCart: (product: CartProduct) => void;
}

const ProductInfo: FC<ProductInfoProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = +e.target.value;
    if (!value) return;
    setQuantity(value);
  };
  const handleIncreaseQuantity = (): void => {
    setQuantity((prevState) => prevState + 1);
  };
  const handleDecreaseQuantity = (): void => {
    setQuantity((prevState) => Math.max(prevState - 1, 1));
  };
  const handleAddToCart = (): void => {
    const product: CartProduct = {
      id: "1",
      image: Thumbnail,
      price: 9999,
      name: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      quantity,
    };
    onAddToCart(product);
  };

  const renderSizes = (): JSX.Element[] =>
    SIZES.map((size) => <Button key={size}>{size}</Button>);

  return (
    <div className={classes.root}>
      <img alt="adidas" src={Adidas} width={60} />
      <p className={classes.name}>
        Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing
        elit.
      </p>
      <span className={classes.category}>Men</span>
      <div className={classes.rating}>
        <RatingBar />
        <span>4.9 of 5</span>
        <span className={classes.rates}>22 Rates</span>
      </div>
      <div className={classes.cost}>
        <span className={classes.price}>
          9,999 <span className={classes.currency}>LE</span>
        </span>
        <del className={classes.oldPrice}>
          9,999 <span className={classes.oldCurrency}>LE</span>
        </del>
        <div className={classes.discount}>30% Off</div>
      </div>
      <div className={classes.divider} />
      <div className={classes.title}>Size</div>
      <div className={classes.sizes}>{renderSizes()}</div>
      <div className={classes.divider} />
      <div className={classes.title}>Color</div>
      <div className={classes.colors}>
        <Button>
          <img alt="black" src={Black} />
        </Button>
        <Button>
          <img alt="red" src={Red} />
        </Button>
      </div>
      <div className={classes.divider} />
      <div className={classes.title}>Quantity</div>
      <Quantity
        quantity={quantity}
        onChangeQuantity={handleChangeQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
      />
      <div className={classes.actions}>
        <Button className={classes.addCart} onClick={handleAddToCart}>
          Add To Cart
        </Button>
        <Button className={classes.pickup}>Pickup From Store</Button>
      </div>
    </div>
  );
};
export default ProductInfo;
