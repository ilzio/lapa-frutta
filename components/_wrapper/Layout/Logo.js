import React from "react";
import { useRouter } from "next/router";
import {lapaWhite, lapaYellow} from '../../../styles/colors'

const Logo = ({ image }) => {
  const router = useRouter();

  function goHome() {
    router.push("/");
  }

  return (
    <div onClick={goHome} className="Logo">
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
          cursor: pointer;
          border: solid 2.5px ${lapaWhite}
        }
        .Logo:hover{
          border: solid 2.5px ${lapaYellow}
        }
        
      `}</style>
    </div>
  );
};

export default Logo;
