import React from "react";
import ProductForm from "./ProductForm";
import { ProductContainer, Info } from "./styles";

export default function Product({ product }) {
  return (
    <ProductContainer active={true}>
      <div className="Header">
        <Info background="var(--brown)" color="var(--white)">
          {product.sku}
        </Info>
        <h4>{product.name}</h4>
      </div>
      <div className="Content">
        <div className="imgContainer">
          <img src={product.imageURL} alt={product.name} />
        </div>

        <ProductForm product={product} />

        <div className="Footer">
          <Info
            background="var(--primaryBg)"
            color="var(--black)"
            fontSize={11}
            bold={true}
          >
            {product.category}
          </Info>
          <Info
            background="var(--primaryBg)"
            color="var(--black)"
            fontSize={11}
            bold={true}
          >
            {product.maker}
          </Info>
        </div>
      </div>
    </ProductContainer>
  );
}
