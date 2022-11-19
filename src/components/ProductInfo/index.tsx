import { FC } from "react";
import classes from "./styles.module.scss";
import Black from "images/black.png";
import Red from "images/red.png";
import Button from "components/Button";
import Adidas from "images/adidas.png";
import Quantity from "components/Quantity";
import RatingBar from "components/RatingBar";

const SIZES = ["Small", "Medium", "Large", "X Large", "XX Large"];

const ProductInfo: FC = () => {
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
      <Quantity />
      <div className={classes.actions}>
        <Button className={classes.addCart}>Add To Cart</Button>
        <Button className={classes.pickup}>Pickup From Store</Button>
      </div>
    </div>
  );
};
export default ProductInfo;
