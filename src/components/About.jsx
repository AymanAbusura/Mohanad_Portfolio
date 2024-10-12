/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { photo } from '../assets'

const About = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="lg:flex lg:justify-between gap-20">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-start'
        >
          {`Marketing and Training Specialist with over 4 years of experience in brand
            management, market analysis, and training program development. Recognized for
            creating strategies that enhance brand awareness, drive sales growth, and elevate
            team capabilities. Skilled in strategic planning, CRM systems, and digital
            marketing, with a passion for developing and delivering impactful training
            programs. Seeking to leverage expertise in both marketing and employee
            development within a dynamic team environment.`}
        </motion.p>
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
            <img src={photo} alt="Mohanad" className={`${isMobile ? 'hidden' : 'w-[250px] rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'}`}/>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");