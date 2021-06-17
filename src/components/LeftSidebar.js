import React, { useContext } from "react";
import Menu from "./Menu";
import { LeftSidebarContent, CompanyInfos } from "./styles";
import { CartContext } from "../contexts/CartContext";

export default function LeftSidebar() {
  const { shoppingCart } = useContext(CartContext);

  const company = {
    name: shoppingCart.name,
    cpnj: shoppingCart.cnpj,
  };

  return (
    <LeftSidebarContent>
      <CompanyInfos>
        <i className="fas fa-store" />
        <div>
          <div className="company-name">{company.name}</div>
          <div>{company.cpnj}</div>
        </div>
        <i className="fas fa-chevron-right" />
      </CompanyInfos>

      <Menu />
    </LeftSidebarContent>
  );
}
