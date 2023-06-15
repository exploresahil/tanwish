"use client";

import { MouseParallax } from "react-just-parallax";
import TanwishLogo from "../svg/TanwishLogo";
import { useState } from "react";

const Splash = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  return (
    <div className={`splash-main ${isClicked ? "goUp" : ""}`}>
      <div className="splash-container">
        <div className="text-container">
          <h2>Balance</h2>
          <h2>Heal</h2>
          <h2>Thrive</h2>
        </div>
        <button type="button" onClick={handleButtonClick}>
          Enter Tanwish Life
        </button>
      </div>
      <TanwishLogo className="logo" />
      <div className="background-container">
        <MouseParallax
          enableOnTouchDevice
          strength={0.5}
          isAbsolutelyPositioned
        >
          <div className="circle earth-circle" />
        </MouseParallax>
        <MouseParallax
          enableOnTouchDevice
          strength={-0.5}
          isAbsolutelyPositioned
        >
          <div className="circle purple-circle" />
        </MouseParallax>
      </div>
      <div className="bg" />
    </div>
  );
};

export default Splash;
