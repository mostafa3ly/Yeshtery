import Button from "components/Button";
import { FC, Fragment } from "react";
import classes from "./styles.module.scss";
import { ReactComponent as Close } from "images/close.svg";
import { CartProduct } from "types/CartProduct";
import { addCommasToNumbers } from "utils/addCommasToNumbers";

interface CartProps {
  cart: CartProduct[];
  isOpen: boolean;
  onRemoveProduct: (id: string) => void;
  onClose: () => void;
}

const Cart: FC<CartProps> = ({ cart, onRemoveProduct, isOpen, onClose }) => {
  const handleRemoveProduct = (id: string): (() => void) => {
    return (): void => {
      onRemoveProduct(id);
    };
  };

  const renderProducts = (): JSX.Element[] =>
    cart.map((product) => (
      <div key={product.id} className={classes.product}>
        <img alt={product.name} src={product.image} width={104} height={104} />
        <div className={classes.details}>
          <p className={classes.name}>{product.name}</p>
          <p className={classes.quantity}>Quantity: {product.quantity}</p>
          <div className={classes.cost}>
            <p className={classes.price}>
              {addCommasToNumbers(product.price)}&nbsp;
              <span className={classes.currency}>LE</span>
            </p>
            <Button
              className={classes.remove}
              onClick={handleRemoveProduct(product.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    ));

  const renderContent = (): JSX.Element => {
    if (!cart.length)
      return <p className={classes.empty}>You have no items yet..</p>;
    const total = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return (
      <div>
        {renderProducts()}
        <p className={classes.total}>Total: {addCommasToNumbers(total)} LE</p>
        <div className={classes.actions}>
          <Button>Review Cart</Button>
          <Button>Complete Checkout</Button>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <div
        className={classes.backdrop.concat(
          " ",
          isOpen ? classes.backdropOpen : classes.backdropClose
        )}
        onClick={onClose}
      />
      <div
        className={classes.drawer.concat(
          " ",
          isOpen ? classes.drawerOpen : classes.drawerClose
        )}
      >
        <Button className={classes.close} onClick={onClose}>
          <Close />
        </Button>
        <h3 className={classes.title}>My Cart</h3>
        <h6 className={classes.subtitle}>Cart Summary</h6>
        {renderContent()}
      </div>
    </Fragment>
  );
};
export default Cart;
