import React, { useState, useEffect } from "react";
import axios from "axios";

export const HttpRequest = (url) => {
  const [product, setProduct] = useState([]);

  //   const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products";

  useEffect(() => {
    axios.get(url).then((data) => {
      console.log(data.data);
      setProduct(data.data);
    });
  }, [url]);

  return product;
};
