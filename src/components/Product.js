import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContainer, Info } from "./styles";

export default function Product({ item }) {
  const [itemQty, setItemQty] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);
  const { addCartItem, removeCartItem, shoppingCart } = useContext(CartContext);

  const cartItem = {
    id: item.id,
    sku: item.sku,
    barcode: item.barcode,
    name: item.name,
    maker: item.maker,
    category: item.category,
    principle: item.principle,
    base: item.base,
    validUntil: item.validUntil,
    imageURL: item.imageURL,
    qty: 1,
    price: item.price.price,
    total: item.price.price,
  };

  function addItem(amount) {
    addCartItem(cartItem, amount);
    setItemQty(getItemAmount(item.id));
    setItemTotal(getItemValue(item.id));
  }

  function removeItem() {
    removeCartItem(item.id);
    setItemQty(getItemAmount(item.id));
    setItemTotal(getItemValue(item.id));
  }

  function getItemAmount(id) {
    let amount = 0;

    shoppingCart.items.forEach((product) => {
      if (product.id === id) {
        amount = product.qty;
      }
    });

    return amount;
  }

  function getItemValue(id) {
    let total = 0;

    shoppingCart.items.forEach((product) => {
      if (product.id === id) {
        total = product.total;
      }
    });
    return total;
  }

  return (
    <ProductContainer>
      <div className="Header">
        <Info background="var(--brown)" color="var(--white)">
          {item.sku}
        </Info>
        <h4>{item.name}</h4>
      </div>
      <div className="Content">
        <div className="imgContainer">
          <img src={item.imageURL} alt={item.name} />
        </div>
        <table>
          <tbody>
            <tr>
              <td>Base</td>
              <td>Estoque</td>
              <td>Quantidade</td>
              <td>Valor</td>
            </tr>
            <tr>
              <td>
                <div>{item.base}</div>
                <div>R$ {item.price.price}</div>
              </td>
              <td>
                {item.quantityAvailable > 0
                  ? `${item.quantityAvailable} un`
                  : "sem estoque"}
              </td>
              <td>
                <button
                  className="fas fa-minus-circle minus"
                  onClick={() => addItem(-1)}
                  disabled={itemQty === 0}
                ></button>
                <span>{itemQty} un</span>
                <button
                  className="fas fa-plus-circle plus"
                  onClick={() => addItem(1)}
                  disabled={
                    item.quantityAvailable === 0 ||
                    itemQty >= item.quantityAvailable
                  }
                ></button>
              </td>
              <td>R$ {itemTotal}</td>
              <td>
                <i className="far fa-trash-alt delete" onClick={removeItem}></i>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="Infos">
          <Info background="var(--lightgray)" color="var(--black)">
            {item.category}
          </Info>
          <Info background="var(--lightgray)" color="var(--black)">
            {item.maker}
          </Info>
        </div>
      </div>
    </ProductContainer>
  );
}
