import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../CART/Cart";
import Order from "../ORDER/Order";
import "./Orders.css";
import { removeProductFromDb, clearDb } from "../../UTILITIES/LocalDatabase";

const Orders = () => {
  const { savedInCart } = useLoaderData();
  const [cart, setCart] = useState(savedInCart);

  const removeProductFromCart = (id) => {
    const remainingProducts = cart.filter((product) => product.id !== id);
    setCart(remainingProducts);
    removeProductFromDb(id);
  };

  // clear cart
  const clearLoaclDb = () => {
    setCart([]);
    clearDb();
  };
  return (
    <div className="container">
      <div className="OrderPage">
        <div className="ReviewProducts">
          {cart.map((product) => (
            <Order
              key={product.id}
              product={product}
              removeProductFromCart={removeProductFromCart}
            ></Order>
          ))}
        </div>

        <div className="OrderReview">
          <Cart cart={cart} clearLoaclDb={clearLoaclDb}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
<h1>This is orders page</h1>;
