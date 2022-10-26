import React from "react";
import "./Order.css";
import deleteBtn from "../../IMAGES/delete.png";

const Order = ({ product, removeProductFromCart }) => {
  const { id, name, img, price, shipping } = product;
  return (
    <div className="review-order">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <div className="product_content">
        <h4>{name}</h4>
        <p>
          Price: <b>{price}</b>
        </p>
        <p>
          Shipping Charge: <b>{shipping}</b>
        </p>
      </div>
      <div className="delete_btn">
        <button onClick={() => removeProductFromCart(id)}>
          <img width="70px" src={deleteBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Order;
