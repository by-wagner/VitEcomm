import React from "react";
import { CartItem } from "../Cart/CartContext";

interface CheckoutItemProps {
  product: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ product }) => {
  return (
    <div>
      <img src={product.imgUrl} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <span>{product.quantity}x ${product.price.toFixed(2)}</span>
      <button>Remove from cart</button>
    </div>
  );
};

export default CheckoutItem;
