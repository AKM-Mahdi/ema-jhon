import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product, addToCartHandler } = props;
  const { img, name, ratings, stock, price } = product;
  return (
    <div>
      <div className="product-container">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p className="ratingWithStock">
          <span>Rating: {ratings}</span> <span>Stock: {stock}</span>
        </p>
        <h3>Price: {price}</h3>
        <div className="product-btn">
          <button
            onClick={() => {
              addToCartHandler(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
