import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import Logo from "./Logo";
import Nav from "./Nav";
import links from "../../../utils/headerLinks";
import breakpoints from "../../../styles/breakpoints";
import {lapaWhite, lapaBlack} from "../../../styles/colors";
import hamburger from "../../../public/assets/hamburger.json";
import MobileMenu from "./MobileMenu";

function Header({ breakpoint }) {
  
  const lottieRef = useRef(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isAnimationPaused, setAnimationPaused] = useState(true);
  const [isAnimationLoaded, setAnimationLoaded] = useState(false);


 

  async function toggleMenu() {
    await setMenuVisible((prevState) => !prevState);
    if (isMenuVisible) {
      lottieRef.current.anim.playSegments([70, 140], true);
    } else {
      lottieRef.current.anim.playSegments([0, 70], true);
    }
  }

  

  return (
    <>
      {isMenuVisible && <MobileMenu elements={links} />}
      <div className="Header">
        <Logo  image="/assets/image.png" />
        {breakpoint !== breakpoints.mobile ? (
          <Nav links={links} />
        ) : (
          <div onClick={toggleMenu} className="Header__hamburger-container">
            <Lottie
              ref={lottieRef}
              options={{
                animationData: hamburger,
                loop: false,
                autoPlay: false,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              autoplay={false}
              isPaused={isAnimationPaused}
              speed={3.0}
              eventListeners={[
                {
                  eventName: "DOMLoaded",
                  callback: () => setAnimationLoaded(true),
                },
              ]}
            />
          </div>
        )}

        <style jsx global>{`
          .Header {
            width: 100%;
            height: 56px;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .Header__hamburger-container {
            display: flex;
            align-items: center;
            z-index: 200;
            height: 40px;
            width: 40px;
          }
          .Header__hamburger-container svg path {
            fill: ${isMenuVisible ? lapaWhite : lapaBlack};
            z-index: 99;
          }
          html,
          body {
            overflow: ${isMenuVisible ? "hidden" : "auto"};
          }
        `}</style>
      </div>
    </>
  );
}

export default Header;
