"use client";

import React, { useState, useEffect } from "react";
import TanwishLogo from "../svg/TanwishLogo";

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 2); // Adjust the interval value (in milliseconds) for a smoother animation

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="loader-main">
      <div className="logo-container">
        <TanwishLogo className="logo" />
        <h1 className="heading">TANWISH</h1>
      </div>
      <p>~ {count}% ~</p>
    </div>
  );
};

export default Loader;
