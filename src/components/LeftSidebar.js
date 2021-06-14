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
        <i className="fas fa-store" style={{ fontSize: "2rem" }} />
        <div>
          <div id="company-name">{company.name}</div>
          <div>{company.cpnj}</div>
        </div>
        <i
          className="fas fa-chevron-right"
          style={{ fontSize: "1.5rem", alignContent: "flex-end" }}
        />
      </CompanyInfos>

      <Menu />
    </LeftSidebarContent>
  );
}
