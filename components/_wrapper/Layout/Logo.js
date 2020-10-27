import React from "react";

const Logo = ({ image }) => {
  return (
    <div className="Logo">
      <style jsx>{`
        .Logo {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background: url(${image});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          object-fit: cover;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Logo;
