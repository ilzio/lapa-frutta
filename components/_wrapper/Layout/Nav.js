import React from "react";
import Link from "next/link";
import { lapaBlue, lapaYellow } from "../../../styles/colors";

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
          font-weight: bold;
        }
        .Nav__link {
          color: ${lapaBlue};
          text-decoration: none;
          padding: 16px;
        }
        .Nav__link:visited {
          color: inherit
        }
        .Nav__link:hover {
          color: ${lapaYellow};
          text-shadow: 1px 2px 6px ${lapaBlue}
        }
      `}</style>
    </nav>
  );
};

export default Nav;
