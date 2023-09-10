import React from "react";
import { StyledInput } from "./CheckoutStyles";

const CheckoutForm: React.FC = () => {
  return (
    <div>
      <h3>Shipping Details</h3>
      <form>
        {/* Name */}
        <div>
          <label>Name:</label>
          <StyledInput type="text" placeholder="Enter your name" />
        </div>
        {/* Address */}
        <div>
          <label>Address:</label>
          <StyledInput type="text" placeholder="Enter your address" />
        </div>
        {/* Credit Card Details */}
        <div>
          <label>Card Number:</label>
          <StyledInput type="text" placeholder="Enter card number" />
        </div>
        <div>
          <label>Expiry Date:</label>
          <StyledInput type="text" placeholder="MM/YY" />
        </div>
        <div>
          <label>CVV:</label>
          <StyledInput type="text" placeholder="CVV" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
