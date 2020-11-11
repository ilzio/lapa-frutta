import React from "react";
import ProductCard from "./ProductCard";
const Shop = ({ products, loading }) => {
  return (
    <div className="Shop">
      {products.map((prod) => (
          <ProductCard
            name={prod.name}
            image={prod.image}
            description={prod.description}
          />
          
      ))}
      <style jsx>{`
        .Shop {
          display: flex;
          height: 300px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Shop;
