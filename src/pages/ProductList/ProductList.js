import React, { useContext } from "react";
import Product from "../../components/Product";
import ProductRightSidebar from "../../components/ProductRightSidebar";
import { ProductContext } from "../../contexts/ProductContext";
import { ProductListContainer, ProductListProducts } from "./styles";

export default function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <ProductListContainer>
      <ProductListProducts>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductListProducts>
      <ProductRightSidebar />
    </ProductListContainer>
  );
}
