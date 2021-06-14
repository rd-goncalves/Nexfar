import React from "react";
import seedProducts from "../../seedProducts";
import {
  ProductListContainer,
  ProductListProducts,
  RightSidebarContent,
} from "./styles";

import Product from "../../components/Product";

export default function ProductList() {
  const productList = seedProducts;

  return (
    <ProductListContainer>
      {/* SearchBar goes here */}

      <ProductListProducts>
        {productList.map((product) => (
          <Product item={product} key={product.id} />
        ))}
      </ProductListProducts>

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
    </ProductListContainer>
  );
}
