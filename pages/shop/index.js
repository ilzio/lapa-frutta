import React, { useEffect, useState } from "react";
import axios from "axios";
import Shop from "../../components/Shop";

const ShopContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
        const data = await axios("/products.json");
        setProducts(data.data);
        setLoading(false);
    }

    setTimeout(() => {
      getData();
    }, 500);
  }, []);
  return (
      <div>
       
          <Shop products={products} loading={loading} />
      </div>
  );
};

export default ShopContainer;
