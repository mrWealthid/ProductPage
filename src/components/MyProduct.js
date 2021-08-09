import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const MyProduct = () => {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;

  const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/1";

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
    <div>
      {product.data ? (
        <div>
          <h1>{product.data.name}</h1>
          <h1>{product.data.description}</h1>
          <img src={product.data.images[0].imageUrl} alt={product.name} />
        </div>
      ) : (
        content
      )}
    </div>
  );
};
export default MyProduct;
