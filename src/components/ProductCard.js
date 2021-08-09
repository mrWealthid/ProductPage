import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="rounded-lg overflow-hidden mx-2  sm:w-1/3 lg:w-3/12 w-6/12  mb-4 shadow-2xl">
      <img
        className="w-full"
        src={props.product.data[0].images[0].imageUrl}
        alt={props.item.name}
      />
      <div className="font-Poppins text-center mt-2 px-3">
        <p className="font-bold text-sm text-gray-700">{props.item.name}</p>
        <p className="text-xs text-gray-700 font-light">
          {props.item.description}
        </p>
        <p className="font-bold text-xs my-2 text-gray-700 text-right">
          {<span className="mx-2 ">Price: &#8358;</span>}

          {props.item.price}
        </p>
      </div>
      <Link to={`/product/${props.item.id}`}>
        <p className="bg-blue-400 text-center  py-2 text-xs  text-white font-Poppins">
          View Product
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
