import { getStoredData } from "../UTILITIES/LocalDatabase";

const DataLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const savedProduct = getStoredData();
  const savedInCart = [];
  for (const id in savedProduct) {
    const addedProduct = products.find((product) => product.id === id);

    if (addedProduct) {
      const quantity = savedProduct[id];
      addedProduct.quantity = quantity;
      //   console.log(addedProduct);
      savedInCart.push(addedProduct);
    }
  }
  return { products, savedInCart };
};

export default DataLoader;
