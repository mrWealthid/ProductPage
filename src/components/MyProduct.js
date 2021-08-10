import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useParams, Link } from "react-router-dom";

const MyProduct = () => {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;
  const { id } = useParams();
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data);
        setProduct({
          loading: false,
          data: data,
          error: false,
        });
      })
      .catch(() =>
        setProduct({
          loading: false,
          data: null,
          error: true,
        })
      );
  }, [url]);

  product.loading && (content = <Loader />);

  product.error && (content = <h1>An Error Loading Content</h1>);

  console.log(product.data);

  return (
    <div className=" flex flex-wrap min-h-screen items-center mx-auto w-11/12 sm:w-10/12 mt-10 lg:w-10/12  justify-center">
      {product.data ? (
        <div className="rounded-lg overflow-hidden mx-2 w-10/12 md:w-6/12  mb-4 shadow-2xl">
          <img
            className="w-full"
            src={product.data.images[0].imageUrl}
            alt={product.name}
          />
          <div className="font-Poppins text-center mt-2 px-3">
            <p className="font-bold text-sm text-gray-700">
              {product.data.name}
            </p>
            <p className="text-xs text-gray-700 font-light">
              {product.data.description}
            </p>
            <p className="font-bold text-xs my-2 text-gray-700 text-right">
              {<span className="mx-2 ">Price: &#8358;</span>}{" "}
              {product.data.price}
            </p>
          </div>
          <Link to="/">
            <p className="bg-blue-400 text-center  py-2 text-xs  text-white font-Poppins">
              Back
            </p>
          </Link>
        </div>
      ) : (
        content
      )}
    </div>
  );
};
export default MyProduct;
