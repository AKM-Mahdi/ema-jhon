import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // total price count
  const totalPrice = cart.reduce(
    (previous, current) => previous + current.price,
    0
  );

  //   shipping calculation
  const totalShipping = cart.reduce(
    (previous, current) => previous + current.shipping,
    0
  );
  //   tax
  const tax = totalPrice + 100 / 5;

  //   Grand Total
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="orderSummary">
      <h2>Order Summary</h2>

      <p>
        <b>Total product:</b> {cart.length}{" "}
      </p>
      <p>
        <b>Total Price:</b>
        {totalPrice}{" "}
      </p>
      <p>
        <b>Total Shipping:</b> {totalShipping}
      </p>
      <p>
        <b>Tax(5%):</b> {tax}{" "}
      </p>
      <p>
        <b>Grand Total:</b> {grandTotal}
      </p>
    </div>
  );
};

export default Cart;
