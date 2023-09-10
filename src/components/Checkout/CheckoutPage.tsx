import React from "react";
import { useCart } from "../Cart/CartContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutItem from "./CheckoutItem";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutForm />
      <div>
        {cart.map((item) => (
          <CheckoutItem key={item.id} product={item} />
        ))}
      </div>
      <CheckoutSummary />
    </div>
  );
};

export default CheckoutPage;
