import Button from "components/Button";
import { FC, Fragment, useEffect, useState } from "react";
import classes from "./styles.module.scss";
import { ReactComponent as ThirtySixty } from "images/360.svg";
import Adidas from "images/adidas.png";
import RatingBar from "components/RatingBar";
import { Product } from "types/Product";
import { addCommasToNumbers } from "utils/addCommasToNumbers";

interface SimilarProductProps {
  product: Product;
}

const SimilarProduct: FC<SimilarProductProps> = ({ product }) => {
  const [image, setImage] = useState("");
  const price = product.hasSalePrice ? product.salePrice : product.price;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`images/${product.image}.png`);
        setImage(response.default);
      } finally {
      }
    };

    fetchImage();
  }, [product.image]);

  const renderOldPrice = (): JSX.Element => {
    if (!product.hasSalePrice) return <Fragment />;
    return (
      <div className={classes.sale}>
        <del className={classes.oldPrice}>
          {addCommasToNumbers(product.price)}{" "}
          <span className={classes.oldCurrency}>LE</span>
        </del>
        <span className={classes.discount}>{product.discount}%</span>
      </div>
    );
  };

  const renderFooter = (): JSX.Element => {
    return product.isPickup ? (
      <div className={classes.pickup}>
        <span>Pickup From:</span>
        <span>{product.from}</span>
      </div>
    ) : (
      <Fragment>
        <div>
          <span>From:</span>
          <span>{product.from}</span>
        </div>
        <div>
          <span>To:</span>
          <span>{product.to}</span>
        </div>
        <div>
          <span>In:</span>
          <span>{product.in} Days</span>
        </div>
      </Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.thumbnail}>
        <img alt="thumbnail" src={image} width={254} loading="lazy" />
        <Button className={classes.thirtySixty}>
          <ThirtySixty />
        </Button>
      </div>
      <div className={classes.details}>
        <p className={classes.name}>{product.name}</p>
        <div className={classes.cost}>
          <div>
            <p className={classes.price}>
              {addCommasToNumbers(price)}&nbsp;
              <span className={classes.currency}>LE</span>
            </p>
            {renderOldPrice()}
          </div>
          <div>
            <img alt="adidas" src={Adidas} width={56} />
          </div>
        </div>
        <div className={classes.rating}>
          <RatingBar />
          <span className={classes.rate}>4.2 of 5</span>
        </div>
        <div className={classes.footer}>{renderFooter()}</div>
      </div>
    </div>
  );
};
export default SimilarProduct;
