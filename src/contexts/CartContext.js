import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import seedCart from "../seedCart";
export const CartContext = createContext();

export function CartProvider(props) {
  const { products } = useContext(ProductContext);
  const [shoppingCart, setShoppingCart] = useState(seedCart);

  const generateCartItems = () => {
    let newItem;
    let newCart = shoppingCart;
    newCart.items = [];

    products.forEach((product) => {
      if (product.qty > 0) {
        newItem = {
          id: product.id,
          sku: product.sku,
          barcode: product.barcode,
          name: product.name,
          maker: product.maker,
          category: product.category,
          principle: product.principle,
          base: product.base,
          validUntil: product.validUntil,
          imageURL: product.imageURL,
          qty: product.qty,
          price: product.price.price,
          total: product.total,
        };

        if (newCart.items.some((item) => item.id === newItem.id)) {
          newCart.items.forEach((item) => {
            if (item.id === newItem.id) {
              item.qty = newItem.qty;
              item.total = newItem.total;
            }
          });
        } else {
          newCart.items.push(newItem);
        }
      }
      setShoppingCart(newCart);
    });
  };

  useEffect(() => {
    generateCartItems();
  });

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        generateCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
