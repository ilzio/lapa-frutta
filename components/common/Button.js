import React from "react";
import Link from "next/link";
import { lapaBlue } from "../../styles/colors";

const Button = ({ text, href, as = "" }) => (
  <>
    <Link href={href} as={as}>
      <div className="Button">{text}</div>
    </Link>
    <style jsx>{`
      .Button {
        color: white;
        background-color: ${lapaBlue};
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
