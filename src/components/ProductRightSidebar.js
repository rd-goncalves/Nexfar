import React from "react";
import { RightSidebarContent } from "./styles";

export default function ProductRightSidebar() {
  return (
    <RightSidebarContent>
      <h4>AÇÕES COMERCIAIS</h4>
      <ul>
        <li>
          <input type="checkbox" />
          <span>EM PROMOÇÃO</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>EM OFERTA</span>
        </li>
      </ul>

      <h4>ESTOQUE</h4>
      <ul>
        <li>
          <input type="checkbox" />
          <span>ESTOQUE DISPONÍVEL</span>
        </li>
      </ul>

      <h4>CATEGORIAS</h4>
      <ul>
        <li>
          <input type="checkbox" />
          <span>GENÉRICOS</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>SIMILARES</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>PSICOTRÓPICOS</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>HIGIENE E BELEZA</span>
        </li>
      </ul>
    </RightSidebarContent>
  );
}
