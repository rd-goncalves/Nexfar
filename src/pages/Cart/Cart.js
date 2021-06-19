import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import ContentBox from "../../components/ContentBox";
import { Link } from "react-router-dom";
import {
  CartContainer,
  CartHeader,
  CartBody,
  CartProducts,
  CartValues,
  CartCustomer,
  CustomerContent,
} from "./styles";

import { Info } from "../../components/styles";

export default function Cart() {
  const { shoppingCart } = useContext(CartContext);
  const { productsTotal, removeAllProducts } = useContext(ProductContext);

  return (
    <CartContainer>
      <CartHeader>
        <Link to="/">
          <div style={{ display: "flex" }}>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span>VOLTAR</span>
          </div>
        </Link>
        <div
          style={{ display: "flex", cursor: "pointer", color: "var(--pink)" }}
          onClick={removeAllProducts}
        >
          <span>LIMPAR CARRINHO</span>
          <i className="far fa-trash-alt"></i>
        </div>
      </CartHeader>

      <CartBody>
        <CartProducts>
          <ContentBox title="PRODUTOS">
            {shoppingCart.items.map((product) => (
              <div
                key={product.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{ fontSize: "12px", fontWeight: "600" }}>
                  {product.name}
                </span>

                <span style={{ fontSize: "12px" }}>
                  {product.qty} un - R$ {product.total}
                </span>
              </div>
            ))}
          </ContentBox>
        </CartProducts>
        <CartValues>
          <ContentBox title="VALORES">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "12px" }}>Total:</span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                R$ {productsTotal}
              </span>
            </div>
          </ContentBox>
        </CartValues>
        <CartCustomer>
          <ContentBox title="CLIENTE">
            <div></div>
            <div></div>

            <CustomerContent>
              <tbody>
                <tr>
                  <td>ID</td>
                </tr>
                <tr>
                  <td>
                    <Info background="var(--brown)" color="var(--white)">
                      {shoppingCart.id}
                    </Info>
                  </td>
                </tr>
                <tr>
                  <td>Razão Social</td>
                  <td>CNPJ</td>
                </tr>
                <tr>
                  <td className="value">{shoppingCart.razaoSocial}</td>
                  <td className="value">{shoppingCart.cnpj}</td>
                </tr>
              </tbody>
            </CustomerContent>
          </ContentBox>
        </CartCustomer>
      </CartBody>
    </CartContainer>
  );
}
