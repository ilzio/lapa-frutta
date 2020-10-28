import React from "react";
import Link from "next/link";

const Nav = ({ links }) => {
  return (
    <nav className="Nav">
      {links.map((link) => (
        <Link href={link.href}>
          <a href={link.href} className="Nav__link">
            {link.label}
          </a>
        </Link>
      ))}
      <style jsx>{`
        .Nav {
          color: #0f52da;
          font-weight: bold;
        }
        .Nav__link {
          text-decoration: none;
          padding: 16px;
        }
        .Nav__link:visited {
          color: inherit
        }
      `}</style>
    </nav>
  );
};

export default Nav;
