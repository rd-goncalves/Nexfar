import React, { createContext, useState, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import seedProducts from "../seedProducts";

const defaultProducts = seedProducts;

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [productsTotal, setProductsTotal] = useState(0);
  const [products, setProducts] = useLocalStorageState(
    "products",
    defaultProducts
  );

  const sumProductsTotal = (products) => {
    let total = products
      .reduce(function (prev, current) {
        return prev + +current.total;
      }, 0)
      .toFixed(2);
    setProductsTotal(total);
  };

  function editProduct(id, qty) {
    let newSt = products.map((product) =>
      product.id === id
        ? {
            ...product,
            qty: Number(qty),
            total: (product.price.price * qty).toFixed(2),
          }
        : product
    );
    sumProductsTotal(newSt);
    setProducts(newSt);
  }

  function removeAllProducts() {
    setProducts(defaultProducts);
  }

  useEffect(() => {
    sumProductsTotal(products);
  });

  return (
    <ProductContext.Provider
      value={{
        products,
        productsTotal,
        editProduct,
        removeAllProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
