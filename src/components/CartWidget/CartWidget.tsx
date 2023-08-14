import React from "react";
import { CartIcon } from "./CartWidgetStyles";

const CartWidget: React.FC = () => {
  return (
    <CartIcon>
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    </CartIcon>
  );
};

export default CartWidget;
