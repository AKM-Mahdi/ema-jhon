import React, { useEffect, useState } from "react";
import Cart from "../CART/Cart";
import Product from "../PRODUCT/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // load more button add using slice function
  const [productCount, setProductCount] = useState(6);
  const increaseProductCount = () => {
    setProductCount(productCount + 3);
  };

  // add to cart handler
  const [cart, setCart] = useState([]);
  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    let totalPrice = [];
    setCart(newCart);
    console.log(totalPrice);
  };

  return (
    <div className="container">
      <div className="shopPage">
        <div className="products">
          <div className="shopCatalog">
            {products.slice(0, productCount).map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCartHandler={addToCartHandler}
              ></Product>
            ))}
          </div>
          <button
            onClick={() => {
              increaseProductCount();
            }}
          >
            Load More..
          </button>
        </div>

        <div className="OrderSummary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
