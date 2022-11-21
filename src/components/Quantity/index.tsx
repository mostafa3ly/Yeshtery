import { ChangeEvent, FC } from "react";
import classes from "./styles.module.scss";
import Button from "components/Button";
import Decrease from "images/decrease.png";
import Increase from "images/increase.png";

interface QuantityProps {
  quantity: number;
  onChangeQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

const Quantity: FC<QuantityProps> = ({
  quantity,
  onChangeQuantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
}) => {
  return (
    <div className={classes.quantity}>
      <Button className={classes.quantityButton} onClick={onDecreaseQuantity}>
        <img alt="decrease" src={Decrease} width={12} />
      </Button>
      <input
        className={classes.quantityInput}
        value={quantity}
        type="number"
        onChange={onChangeQuantity}
      />
      <Button className={classes.quantityButton} onClick={onIncreaseQuantity}>
        <img alt="increase" src={Increase} width={12} />
      </Button>
    </div>
  );
};
export default Quantity;
