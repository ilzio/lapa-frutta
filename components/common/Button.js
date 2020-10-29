import React from "react";
import Link from "next/link";

const Button = ({ text, href, as = "" }) => (
  <>
    <Link href={href} as={as}>
      <div className="Button">{text}</div>
    </Link>
    <style jsx>{`
      .Button {
        color: white;
        background-color: #0f52da;
        padding: 12px 16px;
        width: max-content;
        border-radius: 8px;
        cursor: pointer;
        font-family: "Balsamiq Sans", cursive;
      }
    `}</style>
  </>
);

export default Button;
