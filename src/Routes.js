import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Cart from "./pages/Cart/Cart";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <ProductList />} />
      <Route exact path="/cart" render={() => <Cart />} />
      <Redirect to="/" />
    </Switch>
  );
}
