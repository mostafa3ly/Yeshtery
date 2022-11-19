import Container from "components/Container";
import ProductDetails from "components/ProductDetails";
import { FC } from "react";

const Main: FC = () => {
  return (
    <main>
      <Container>
        <ProductDetails />
      </Container>
    </main>
  );
};
export default Main;
