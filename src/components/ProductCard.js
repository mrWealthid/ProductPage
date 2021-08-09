import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item, product }) => {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={product.data[0].images[0].imageUrl} alt={item.name} />
      <Link className="bg-blue-400 p-3 rounded font-Poppins " to="/"></Link>
    </div>
  );
};

export default ProductCard;
