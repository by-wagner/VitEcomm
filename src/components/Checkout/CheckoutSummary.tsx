import React from "react";
import { useCart } from "../Cart/CartContext";
import { CheckoutSummaryContainer, StyledButton } from "./CheckoutStyles";

const CheckoutSummary: React.FC = () => {
  const { cart } = useCart();

  const total = cart.reduce(
    (acc: number, product: any) => acc + product.price,
    0
  );

  return (
    <CheckoutSummaryContainer>
      <h3>Total: ${total.toFixed(2)}</h3>
      <StyledButton>Finish Purchase</StyledButton>
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
