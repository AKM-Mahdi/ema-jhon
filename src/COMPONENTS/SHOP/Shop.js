import React, { useEffect, useState } from "react";
import Cart from "../CART/Cart";
import Product from "../PRODUCT/Product";
import { addToDb, clearDb, getStoredData } from "../../UTILITIES/LocalDatabase";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  // load data using state and useEffect

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // load product usign LOADER
  const products = useLoaderData();

  // load more button add using slice function
  const [productCount, setProductCount] = useState(6);
  const increaseProductCount = () => {
    setProductCount(productCount + 3);
  };

  useEffect(() => {
    const storedCart = getStoredData();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    console.log(savedCart);
    setCart(savedCart);
  }, [products]);

  // add to cart handler
  const [cart, setCart] = useState([]);

  const addToCartHandler = (selectedProduct) => {
    let newCart = [];
    let exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      exists.quantity++;
      let rest = cart.filter((product) => product.id !== selectedProduct.id);
      newCart = [exists, ...rest];
    }
    addToDb(selectedProduct.id);
    setCart(newCart);
  };

  // // remove product
  // const removeProductHandler = (id) => {
  //   removeProductFromDb(id);
  // };

  // clear local storage
  const clearLoaclDb = () => {
    setCart([]);
    clearDb();
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
                // removeProductHandler={removeProductHandler}
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
          <Cart cart={cart} clearLoaclDb={clearLoaclDb}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
