"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "../style/snowfall.css"

const Snowfall: React.FC = () => {
  useEffect(() => {
    const snowflakesContainer = document.getElementById("snowflakes-container");

    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflakesContainer.appendChild(snowflake);

      gsap.fromTo(
        snowflake,
        {
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
          opacity: 1, // Set initial opacity to 1
        },
        {
          y: 0,
          opacity: 0, // Set target opacity to 0
          duration: Math.random() * 3 + 2,
          repeat: -1,
          ease: 'power1.out',
          onComplete: () => snowflake.remove(),
        }
      );
    }

    // Create initial snowflakes
    for (let i = 0; i < 10; i++) {
      createSnowflake();
    }

    // Create new snowflake every 0.5 seconds
    const snowfallInterval = setInterval(() => {
      createSnowflake();
    }, 4000);

    // Clean up interval on component unmount
    return () => clearInterval(snowfallInterval);
  }, []);

  return <div id="snowflakes-container" className="snowflakes-container overflow-hidden"></div>;
};

export default Snowfall;
