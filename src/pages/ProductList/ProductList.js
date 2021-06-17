import React from "react";
import Product from "../../components/Product";
import ProductRightSidebar from "../../components/ProductRightSidebar";
import seedProducts from "../../seedProducts";
import { ProductListContainer, ProductListProducts } from "./styles";

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

      <ProductRightSidebar />
    </ProductListContainer>
  );
}
