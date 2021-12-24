import React from "react";
import { useState } from "react/cjs/react.development";
import AddProductForm from "../../components/AddProductForm";
import CartProducts from "../../components/CartProducts";
import Product from "../../components/Product";
import "./Home.css";

function Home({ products, setProducts }) {
  const [cart, setCart] = useState([]);
  return (
    <div className="Home">
      <AddProductForm setProducts={setProducts} />
      <CartProducts cart={cart} />
      <div className="productsWrapper">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.productName}
              price={product.productPrice}
              url={product.imgUrl}
              setProducts={setProducts}
              product={product}
              added={product.added}
              id={product.id}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
