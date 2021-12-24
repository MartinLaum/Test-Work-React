import React from "react";
import "./CartProducts.css";

function CartProducts({ cart }) {
  return <div className="CartProducts">Products in cart: {cart.length}</div>;
}

export default CartProducts;
