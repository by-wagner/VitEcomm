import React from "react";
import { StyledInput } from "./CheckoutStyles";

const CheckoutForm: React.FC = () => {
  return (
    <div>
      <h3>Shipping Details</h3>
      <form>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
          />
        </div>
        {/* Address */}
        <div>
          <label htmlFor="address">Address:</label>
          <StyledInput
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            autoComplete="street-address"
          />
        </div>
        {/* Credit Card Details */}
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <StyledInput
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter card number"
            autoComplete="cc-number"
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <StyledInput
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            autoComplete="cc-exp"
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <StyledInput
            type="text"
            id="cvv"
            name="cvv"
            placeholder="CVV"
            autoComplete="cc-csc"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
