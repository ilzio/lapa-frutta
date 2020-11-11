import React from "react";
import { useRouter } from "next/router";
import { lapaBlue } from "../../styles/colors";

const ProductCard = ({ name, image, description }) => {
  const router = useRouter();
  const handleClick = (target) => () => {
    const newUrl = target.toLowerCase().split(" ").join("-");
    router.push(`/shop/${newUrl}`);
  };
  return (
    <div className="ProductCard" onClick={handleClick(name)}>
      <div className="ProductCard__name-container">
        <div className="ProductCard__overlay" />
        <p className="ProductCard__text">{name}</p>
      </div>
      <div className="ProductCard__info-container">
        <div className="ProductCard__overlay" />
        <p className="ProductCard__text">{description}</p>
      </div>
      <style jsx>{`
        .ProductCard {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;

          background-image: url(${image});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 100%;
          width: 100%;
          box-sizing: border-box;

          border-radius: 8px;
          max-width: 300px;
        }
        .ProductCard:hover {
          border: solid transparent 2px;
          cursor: pointer;
        }
        .ProductCard__overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: ${lapaBlue};
          border-radius: 8px;
        }
        .ProductCard__text {
          margin: 0px;
          color: white;
          position: relative;
          border-radius: 8px;
        }
        .ProductCard__name-container {
          text-align: center;
          font-family: "Balsamiq Sans", cursive;
          text-transform: capitalize;
        }
        .ProductCard__info-container {
          display: flex;
          justify-content: space-between;
          font-family: "Balsamiq Sans", cursive;
        }
        .ProductCard__name-container,
        .ProductCard__info-container {
          position: relative;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
