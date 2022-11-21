import Cart from "components/Cart";
import Footer from "components/Footer";
import Header from "components/Header";
import Main from "components/Main";
import { useState } from "react";
import { CartProduct } from "types/CartProduct";

function App() {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = (cartProduct: CartProduct): void => {
    setCart((prevState) => {
      const isFound = prevState.some(({ id }) => id === cartProduct.id);
      return !isFound
        ? [...prevState, cartProduct]
        : prevState.map((product) =>
            product.id === cartProduct.id
              ? {
                  ...product,
                  quantity: cartProduct.quantity + product.quantity,
                }
              : product
          );
    });
  };
  const handleRemoveProduct = (id: string): void => {
    setCart((prevState) => prevState.filter((product) => product.id !== id));
  };

  const handleToggleCart = (): void => {
    setIsOpen((prevState) => {
      document.body.style.overflowY = prevState ? "auto" : "hidden";
      return !prevState;
    });
  };

  return (
    <div>
      <Header
        items={cart.reduce((sum, product) => sum + product.quantity, 0)}
        onOpenCart={handleToggleCart}
      />
      <Main onAddToCart={handleAddToCart} />
      <Footer />
      <Cart
        cart={cart}
        onRemoveProduct={handleRemoveProduct}
        onClose={handleToggleCart}
        isOpen={isOpen}
      />
    </div>
  );
}

export default App;
