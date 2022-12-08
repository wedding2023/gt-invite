import React from "react";
import { motion, useTransform } from "framer-motion";

import "./sectionThree.css";
import fairyLights from "/public/GalaPage/fairylights.png";
import couple from "/public/Summary/Gala-icon.png";

export default function Sangeet({ scrollYProgress }) {

  const stageScaleUp = useTransform(scrollYProgress, [0.31, 0.48], [1, 10], {
    clamp: true,
  });

  const coupleScale = useTransform(scrollYProgress, [0.31, 0.48], [0.7, 2.5], {
    clamp: true,
  });

  const couplePaddingTop = useTransform(
    scrollYProgress,
    [0.31, 0.48],
    ["80%", "0%"],
    {
      clamp: true,
    }
  );

  return (
    <div className="sangeet--wrap">
      <div className="sangeet">
        <div className="sangeet--outer--container">
          <img src={fairyLights} className="gala--faiyLights" />

          <div className="gala--stage--container">
            <motion.canvas
              className="gala--stage"
              style={{ scale: stageScaleUp }}
            ></motion.canvas>

            <motion.img
              src={couple}
              className="gala--couple"
              style={{
                scale: coupleScale,
                y: couplePaddingTop,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
