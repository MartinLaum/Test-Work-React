import React, { useState } from "react";
import "./Product.css";

function Product({ name, url, price, setProducts, id, setCart, product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setCart((cart) => {
      return [...cart, product];
    });
  };

  const handleRemoveFromCart = () => {
    setAdded(false);
    setCart((cart) => {
      return cart.filter((product) => product.id !== id);
    });
  };

  const deleteProduct = () => {
    setProducts((products) => {
      return products.filter((product) => product.id !== id);
    });
  };
  return (
    <div className="Product">
      <div className="removeProduct pointer" onClick={deleteProduct}>
        x
      </div>
      <div className="productImage">
        <img src={url} alt="product image" />
      </div>
      <div className="productName ProductEssentials">{name}</div>
      <div className="productPrice ProductEssentials">${price}</div>
      {added ? (
        <button className=" remBtn pointer" onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="addBtn pointer" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Product;
