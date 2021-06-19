import React from "react";
import { ProductContainer, Info } from "./styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { InputAdornment } from "@material-ui/core";
import useProductState from "../hooks/useProductState";

export default function Product({ product }) {
  const [
    productQty,
    handleChange,
    handleBlur,
    reset,
    addOne,
    subtractOne,
    editProduct,
  ] = useProductState(product.qty);

  return (
    <ProductContainer active={product.quantityAvailable > 0}>
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
        <table>
          <tbody>
            <tr>
              <td>Base</td>
              <td>Estoque</td>
              <td>Quantidade</td>
              <td>Valor</td>
            </tr>
            <tr>
              <td>
                <div>{product.base}</div>
                <div>R$ {product.price.price}</div>
              </td>
              <td>
                {product.quantityAvailable > 0
                  ? `${product.quantityAvailable} un`
                  : "sem estoque"}
              </td>
              <td className="ProductQty">
                <button
                  className="fas fa-minus-circle minus"
                  onClick={() => subtractOne(product)}
                  disabled={productQty === 0 || productQty === ""}
                  tabIndex="-1"
                ></button>

                <ValidatorForm
                  onSubmit={() => editProduct(product.id, productQty)}
                  style={{ display: "inline-block", padding: "0 2px 0 2px" }}
                >
                  <TextValidator
                    value={productQty}
                    onChange={handleChange}
                    onBlur={() => handleBlur(product)}
                    validators={["minNumber:0"]}
                    errorMessages={["Quantidade inválida."]}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">un</InputAdornment>
                      ),
                    }}
                    style={{ width: "68px" }}
                    disabled={product.quantityAvailable === 0}
                  />
                </ValidatorForm>
                <button
                  className="fas fa-plus-circle plus"
                  onClick={() => addOne(product)}
                  disabled={
                    product.quantityAvailable === 0 ||
                    productQty >= product.quantityAvailable
                  }
                  tabIndex="-1"
                ></button>
              </td>
              <td>R$ {product.total}</td>
              <td>
                {product.qty > 0 && (
                  <i
                    className="far fa-trash-alt delete"
                    onClick={() => reset(product)}
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="Infos">
          <Info background="var(--primaryBg)" color="var(--black)">
            {product.category}
          </Info>
          <Info background="var(--primaryBg)" color="var(--black)">
            {product.maker}
          </Info>
        </div>
      </div>
    </ProductContainer>
  );
}
