import { useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const useProductState = (initialVal) => {
  const [qty, setQty] = useState(initialVal);
  const { editProduct } = useContext(ProductContext);

  const handleChange = (e) => {
    setQty(e.target.value);
  };

  const reset = (product) => {
    setQty(0);
    editProduct(product.id, 0);
  };

  const addOne = (product) => {
    let newSt = Number(qty) + 1;
    setQty(newSt);
    editProduct(product.id, newSt);
  };

  const subtractOne = (product) => {
    let newSt = Number(qty) - 1;
    setQty(newSt);
    editProduct(product.id, newSt);
  };

  const handleBlur = (product) => {
    if (qty > 0 && qty <= product.quantityAvailable) {
      setQty(qty);
      editProduct(product.id, qty);
    } else {
      setQty(0);
      editProduct(product.id, 0);
    }
  };

  return [
    qty,
    handleChange,
    handleBlur,
    reset,
    addOne,
    subtractOne,
    editProduct,
  ];
};

export default useProductState;
