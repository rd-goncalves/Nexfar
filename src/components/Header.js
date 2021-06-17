import React, { useContext } from "react";
import { HeaderContent, GreenText, CartButton } from "./styles";
import { CartContext } from "../contexts/CartContext";
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  const { cartTotal } = useContext(CartContext);

  function goToCart() {
    history.push("/cart");
  }

  return (
    <HeaderContent onClick={goToCart}>
      <img src={process.env.PUBLIC_URL + "/Nexfar.png"} alt="Nexfar" />
      <div>
        <span>NEXFAR</span>
        <div id="CartInfos">
          <CartButton className="fas fa-shopping-cart"></CartButton>
          <GreenText fontSize={18}>R$ {cartTotal}</GreenText>
        </div>
        <span>Pedido Mínimo: R$ 150,00</span>
      </div>
    </HeaderContent>
  );
}
