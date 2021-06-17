import React from "react";
import { RightSidebarContent } from "../pages/ProductList/styles";

export default function ProductRightSidebar() {
  return (
    <RightSidebarContent>
      <h4>AÇÕES COMERCIAIS</h4>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>EM PROMOÇÃO</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>EM OFERTA</span>
          </label>
        </li>
      </ul>

      <h4>ESTOQUE</h4>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>ESTOQUE DISPONÍVEL</span>
          </label>
        </li>
      </ul>

      <h4>CATEGORIAS</h4>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>GENÉRICOS</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>SIMILARES</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>PSICOTRÓPICOS</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>HIGIENE E BELEZA</span>
          </label>
        </li>
      </ul>
    </RightSidebarContent>
  );
}
