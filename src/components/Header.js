import React, { useContext } from "react";
import { HeaderContent, GreenText, CartButton } from "./styles";
import { CartContext } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { cartTotal } = useContext(CartContext);

  return (
    <HeaderContent>
      <img src="/Nexfar.png" alt="Nexfar" />
      <div>
        <span>NEXFAR</span>
        <div id="CartInfos">
          <NavLink to="/cart">
            <CartButton className="fas fa-shopping-cart"></CartButton>
          </NavLink>
          <GreenText fontSize={18}>R$ {cartTotal}</GreenText>
        </div>
        <span>Pedido Mínimo: R$ 150,00</span>
      </div>
    </HeaderContent>
  );
}
