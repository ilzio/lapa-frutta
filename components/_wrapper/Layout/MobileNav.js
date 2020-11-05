import React from "react";
import Link from "next/link";
import {lapaWhite, lapaYellow} from '../../../styles/colors'

const MobileNav = ({ links }) => {
  return (
    <nav className="MobileNav">
      {links.map((link) => (
        <Link href={link.href}>
          <a href={link.href} className="MobileNav__link">
            {link.label}
          </a>
        </Link>
      ))}
      <style jsx>{`
        .MobileNav {
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 3;
        }
        .MobileNav__link {
          color: ${lapaWhite};
          text-decoration: none;
          padding: 24px;
          font-size: 22px;
        }
        .MobileNav__link:visited {
          color: inherit
        }
        .MobileNav__link:hover {
          color: ${lapaYellow}
        }
      `}</style>
    </nav>
  );
};

export default MobileNav;
