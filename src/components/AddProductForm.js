import React, { useState } from "react";
import "./AddProductForm.css";

function AddProductForm({ setProducts }) {
  const [imgUrl, setImgUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setProducts((products) => {
      return [
        ...products,
        {
          imgUrl,
          productName,
          productPrice,
          id: Math.random(),
        },
      ];
    });

    setImgUrl("");
    setProductName("");
    setProductPrice("");
  };
  return (
    <div className="AddProductForm">
      <h1 className="addHeading">Add Product Form</h1>
      <form className="addForm" onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          required
          placeholder="Product Image"
          onChange={(e) => setImgUrl(e.target.value)}
          value={imgUrl}
        />
        <input
          type="text"
          required
          placeholder="Product name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="text"
          required
          placeholder="Product price"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <div className="submitWrapper">
          <button className="submitBtn pointer">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
