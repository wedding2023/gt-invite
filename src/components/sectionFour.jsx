import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useTransform,
  useAnimationControls,
} from "framer-motion";

import "./sectionFour.css";
import arrowR from "/public/SangeetLunchPage/arrowR.png";
import arrowL from "/public/SangeetLunchPage/arrowL.png";
import Poem from "/public/SangeetLunchPage/Poem--bg.png";

export default function SangeetLunch({ scrollYProgress }) {
  const SangeetDoorsRef = useRef(null);
  const isDoorsInVeiw = useInView(SangeetDoorsRef, { once: true, amount: 0.8 });

  const poemOpacity = useTransform(scrollYProgress, [0.63, 0.69], [1, 0], {
    clamp: true,
  });
  const textOpacity = useTransform(scrollYProgress, [0.692, 0.73], [0, 1], {
    clamp: true,
  });
  const poenGoUp = useTransform(scrollYProgress, [0.66, 0.69], [0, -50], {
    clamp: true,
  });

  const lantensY = useTransform(
    scrollYProgress,
    [0.745, 0.83],
    ["0%", "175%"],
    {
      clamp: true,
    }
  );

  const LeftDoorcontrols = useAnimationControls();
  const RightDoorcontrols = useAnimationControls();

  useEffect(() => {
    if (isDoorsInVeiw) {
      LeftDoorcontrols.start({ x: "-100%" });
      RightDoorcontrols.start({ x: "100%" });
    } else if (!isDoorsInVeiw) {
      LeftDoorcontrols.stop({ x: "-100%" });
      RightDoorcontrols.stop({ x: "100%" });
    }
  }, [isDoorsInVeiw]);

  return (
    <div className="sangeetLunch--wrap">
      <div className="sangeetLunch" ref={SangeetDoorsRef}>
        <div className="sangeetLunch--bottom--deco--container">
          <motion.canvas
            className="sangeetLunch--upper--deco"
            style={{ y: lantensY }}
          ></motion.canvas>

          <motion.canvas className="sangeetLunch--bottom--deco"></motion.canvas>
        </div>
        {isDoorsInVeiw && (
          <motion.div
            className="sangeetLunch--text--container"
            style={{ opacity: textOpacity }}
          >
            <h1 className="sangeetLunch--topic">Sangeet Lunch</h1>

            <p className="sangeetLunch--date">28 | 01 | 23</p>
            <p className="sangeetLunch--para">
              Phajneesh, Gurpreet, Gaganpreet, Priyanka, Harsh, and Nirup look
              forward to celebrating a colorful afternoon of Mehendi, dance &
              laughter with you!
            </p>
            <p className="sangeetLunch--Time">12 PM - 3.30 PM</p>
            <p className="sangeetLunch--venue">
              Venue: Radisson Blu Sukhumvit, Ballroom <br />{" "}
              <span className="sangeetLunch--venue--numbers">489</span>{" "}
              Sukhumvit Road, Bangkok
            </p>

            <div className="sangeetLunch--attire--container">
              <img src={arrowL} className="sangeetLunch--attire--arrowL" />
              <p className="sangeetLunch--attire">Attire: Colorful</p>
              <img src={arrowR} className="sangeetLunch--attire--arrowR" />
            </div>
          </motion.div>
        )}

        <>
          <motion.div
            className="sangeetLunch--poem--container"
            style={{ opacity: poemOpacity, y: poenGoUp }}
          >
            <img src={Poem} className="sangeetLunch--poem" />
          </motion.div>

          <div className="sangeetLunch--doors--container">
            <motion.canvas
              className="sangeetLunch--doorL"
              initial={{ x: 0 }}
              animate={LeftDoorcontrols}
              transition={{ duration: 3, ease: "easeInOut" }}
            ></motion.canvas>

            <motion.canvas
              className="sangeetLunch--doorR"
              initial={{ x: 0 }}
              animate={RightDoorcontrols}
              transition={{ duration: 3, ease: "easeInOut" }}
            ></motion.canvas>
          </div>
        </>
      </div>
    </div>
  );
}
