import React, { useState } from "react";

const ProductDetails = ({ product, index, toggleProduct, isOn }) => {
  const [productState, setProductState] = useState(isOn);
  const handleClick = () => {
    const newState = !productState;
    setProductState(newState);
    toggleProduct(index, newState);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: productState ? "green" : "red", // ירוק אם דולק, אדום אם מכובה
        color: "white",
        padding: "10px",
        margin: "5px",
        width: "100px",
        borderRadius: "5px",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <p>{product}</p>
    </div>
  );
};

export default ProductDetails;
