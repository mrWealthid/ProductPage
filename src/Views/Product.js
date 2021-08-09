import React, { useState, useEffect } from "react";
// import { HttpRequest } from "../Request/HttpRequest";
import axios from "axios";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  const url =
    "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/?page=1&limit=9";

  let content = null;
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
        setProduct({ loading: false, data: data, error: false });
      })
      .catch(() =>
        setProduct({
          loading: false,
          data: null,
          error: true,
        })
      );
  }, [url]);

  console.log(product);

  //checking for truthy value and reassigning the content for proper error handling
  product.loading && (content = <Loader />);

  product.error && (content = <div>There was an error loading data</div>);

  return (
    <>
      <div className=" flex flex-wrap w-11/12 mt-10 lg:w-10/12 mx-auto justify-center">
        {product.data
          ? product.data.map((item) => (
              <ProductCard key={item.id} item={item} product={product} />
            ))
          : content}
      </div>
    </>
  );
};

export default Product;
