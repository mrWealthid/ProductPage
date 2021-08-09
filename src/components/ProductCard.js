import React from "react";

const ProductCard = ({ item, product }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <img src={product.data[0].images[0].imageUrl} alt={item.name} />
    </div>
  );
};

export default ProductCard;
