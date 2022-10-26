import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearLoaclDb }) => {
  // console.log(cart);

  // quantity
  const quantity = cart.reduce(
    (previous, current) => previous + current.quantity,
    0
  );

  // total price count
  const totalPrice = cart.reduce(
    (previous, current) =>
      previous + parseInt(current.price * current.quantity),
    0
  );

  //   shipping calculation
  const totalShipping = cart.reduce(
    (previous, current) => previous + current.shipping,
    0
  );
  //   tax
  const tax = parseFloat(totalPrice * 0.1);

  //   Grand Total
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <>
      <div className="orderSummary">
        <div className="row">
          <h2>Order Summary</h2>

          <p>
            <b>Total product:</b> {quantity}{" "}
          </p>
          <p>
            <b>Total Price:</b>
            {totalPrice}{" "}
          </p>
          <p>
            <b>Total Shipping:</b> {totalShipping}
          </p>
          <p>
            <b>Tax(5%):</b> {tax.toFixed(2)}{" "}
          </p>
          <p>
            <b>Grand Total:</b> {grandTotal.toFixed(2)}
          </p>
        </div>
        <div className="cart-btn">
          <button onClick={() => clearLoaclDb()}>Clear Cart</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
