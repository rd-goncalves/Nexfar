import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import ContentBox from "../../components/ContentBox";
import { Link } from "react-router-dom";
import { Info } from "../../components/styles";
import {
  CartContainer,
  CartHeader,
  CartBody,
  CartProducts,
  ContentBoxProducts,
  ContentBoxValues,
  CartCustomer,
  CustomerContent,
} from "./styles";

export default function Cart() {
  const { shoppingCart } = useContext(CartContext);
  const { productsTotal, removeAllProducts } = useContext(ProductContext);

  return (
    <CartContainer>
      <CartHeader>
        <Link to="/">
          <div>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span>VOLTAR</span>
          </div>
        </Link>
        <div className="removeAllProducts" onClick={removeAllProducts}>
          <span>LIMPAR CARRINHO</span>
          <i className="far fa-trash-alt"></i>
        </div>
      </CartHeader>

      <CartBody>
        <div className="LeftContent">
          <CartProducts>
            <ContentBox title="PRODUTOS">
              {shoppingCart.items.map((product) => (
                <ContentBoxProducts key={product.id}>
                  <span>{product.name}</span>
                  <span>
                    {product.qty} un - R$ {product.total}
                  </span>
                </ContentBoxProducts>
              ))}
            </ContentBox>
          </CartProducts>
          <CartCustomer>
            <ContentBox title="CLIENTE">
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
        </div>
        <div className="RightContent">
          <div>
            <ContentBox title="VALORES">
              <ContentBoxValues>
                <span style={{ fontSize: "12px" }}>Total:</span>
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  R$ {productsTotal}
                </span>
              </ContentBoxValues>
            </ContentBox>
          </div>
        </div>
      </CartBody>
    </CartContainer>
  );
}
