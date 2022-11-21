import { FC } from "react";
import classes from "./styles.module.scss";
import Container from "components/Container";
import SearchBox from "components/SearchBox";
import Button from "components/Button";
import { ReactComponent as Adidas } from "images/adidas.svg";
import { ReactComponent as Wishlist } from "images/wishlist.svg";
import { ReactComponent as Cart } from "images/cart.svg";
import { ReactComponent as Login } from "images/login.svg";

interface ToolbarProps {
  items: number;
  onOpenCart: () => void;
}

const Toolbar: FC<ToolbarProps> = ({ items, onOpenCart }) => {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.content}>
          <SearchBox />
          <div className={classes.brand}>
            <Adidas />
          </div>
          <div className={classes.actions}>
            <Button onClick={onOpenCart}>
              <div className={classes.cart}>
                <Cart />
                <span className={classes.cartItems}>
                  {items > 99 ? "99+" : items}
                </span>
              </div>
              Cart
            </Button>
            <Button>
              <Wishlist />
              Wishlist
            </Button>
            <Button>
              <Login />
              Login
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Toolbar;
