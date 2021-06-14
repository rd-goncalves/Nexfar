import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cartTotal, setCartTotal] = useState(0);

  const [shoppingCart, setShoppingCart] = useState({
    id: 62416,
    name: "DROGARIA GIMENEZ",
    razaoSocial: "BENERVAU & CLAUDIO DROGARIA LTDA - ME",
    cnpj: "20.269.237/0001-80",
    externalClientId: "C00068861",
    cartTotal: 0,
    address: {
      cep: "06036007",
      address: "AVENIDA PADRE VICENTE MELILLO, 1906 - UMUARAMA",
      city: "OSASCO",
      state: "SP",
    },
    items: [],
  });

  function addCartItem(newItem, amount) {
    let currCart = shoppingCart;

    if (currCart.items.some((item) => item.id === newItem.id)) {
      //Update the item in Array

      currCart.items.forEach((item) => {
        if (item.id === newItem.id) {
          if (amount < 1 && item.qty === 1) {
            //Clean item array
            if (currCart.items.length === 1) {
              currCart.items = [];
            } else {
              //Remove Item from shoppingCart.
              currCart.items = shoppingCart.items.filter(
                (product) => product.id !== item.id
              );
            }
          } else {
            //Update the current amount.
            item.qty = item.qty + amount;
            item.total = (item.qty * item.price).toFixed(2);
          }
        }
      });
    } else {
      currCart.items.push(newItem);
    }

    updateCartTotal(currCart);
    setShoppingCart(currCart);
  }

  function removeCartItem(id) {
    let currCart = shoppingCart;
    currCart.items = shoppingCart.items.filter((product) => product.id !== id);

    updateCartTotal(currCart);
    setShoppingCart(currCart);
  }

  function updateCartTotal(prevSt) {
    let currCart = prevSt;

    currCart.cartTotal =
      currCart.items.length > 0
        ? currCart.items
            .reduce(function (prev, current) {
              return prev + +current.total;
            }, 0)
            .toFixed(2)
        : 0;
    setCartTotal(currCart.cartTotal);
  }

  function removeAllItems() {
    let currCart = shoppingCart;
    currCart.items = [];
    updateCartTotal(currCart);
    setShoppingCart(currCart);
  }

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        removeCartItem,
        removeAllItems,
        cartTotal,
        shoppingCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
