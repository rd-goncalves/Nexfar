import React from "react";
import useProductState from "../hooks/useProductState";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { InputAdornment } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { Info } from "./styles";

export default function ProductForm({ product }) {
  const [
    productQty,
    handleChange,
    handleBlur,
    reset,
    addOne,
    subtractOne,
    editProduct,
  ] = useProductState(product.qty);

  const stock =
    product.quantityAvailable > 0 ? (
      <div>
        <i className="fas fa-warehouse" />
        <span className="inStockContent">{product.quantityAvailable} un</span>
      </div>
    ) : (
      <div className="outOfStockContent">
        <i className="fas fa-mobile" />
        <div>
          <span>SEM ESTOQUE</span>
          <Info
            background="var(--lightgray)"
            color="var(--black)"
            fontSize={10}
            bold={true}
          >
            AVISE-ME
          </Info>
        </div>
      </div>
    );

  const Trashcan = product.qty > 0 && (
    <Tooltip title="Remover produto">
      <i className="far fa-trash-alt" onClick={() => reset(product)} />
    </Tooltip>
  );

  return (
    <table>
      <tbody>
        <tr>
          <th className="BaseHeader">Base</th>
          <th>Estoque</th>
          <th>Quantidade (un)</th>
          <th>Valor</th>
        </tr>
        <tr>
          <td className="BaseContent">
            <div>{product.base}</div>
            <div>R$ {product.price.price}</div>
          </td>
          <td>{stock}</td>
          <td className="ProductQty">
            <div>
              <Tooltip title="Reduzir quantidade">
                <span>
                  <button
                    className="fas fa-minus-circle"
                    onClick={() => subtractOne(product)}
                    disabled={productQty === 0 || productQty === ""}
                    tabIndex="-1"
                  />
                </span>
              </Tooltip>
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
              <Tooltip title="Aumentar quantidade">
                <span>
                  <button
                    className="fas fa-plus-circle"
                    onClick={() => addOne(product)}
                    disabled={
                      product.quantityAvailable === 0 ||
                      productQty >= product.quantityAvailable
                    }
                    tabIndex="-1"
                  />
                </span>
              </Tooltip>
            </div>
          </td>
          <td className="TotalContent">R$ {product.total}</td>
          <td className="TrashcanContent">{Trashcan}</td>
        </tr>
      </tbody>
    </table>
  );
}
