// use loacl storage to manage data
const addToDb = (id) => {
  let shoppingCart = getStoredData();
  // addquantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredData = () => {
  let shoppingCart = {};

  // get data from loacl storage
  const storedData = localStorage.getItem("shopping-cart");
  if (storedData) {
    shoppingCart = JSON.parse(storedData);
  }
  return shoppingCart;
};

const removeProductFromDb = (id) => {
  const storedData = localStorage.getItem("shopping-cart");
  if (storedData) {
    const shoppingCart = JSON.parse(storedData);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const clearDb = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getStoredData, removeProductFromDb, clearDb };
