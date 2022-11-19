import { FC } from "react";
import classes from "./styles.module.scss";
import Button from "components/Button";
import Decrease from "images/decrease.png";
import Increase from "images/increase.png";

const Quantity: FC = () => {
  return (
      <div className={classes.quantity}>
        <Button className={classes.quantityButton}>
          <img alt="decrease" src={Decrease} width={12} />
        </Button>
        <input
          className={classes.quantityInput}
          defaultValue={1}
          type="number"
        />
        <Button className={classes.quantityButton}>
          <img alt="increase" src={Increase} width={12} />
        </Button>
      </div>
  );
};
export default Quantity;
