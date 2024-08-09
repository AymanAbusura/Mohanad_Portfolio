/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { photo } from '../assets'

//addnew
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // for translation new
  const {t} = useTranslation();

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
        {/* <p className={styles.sectionSubText}>{t("about.header1")}</p> */}
        {/* <h2 className={styles.sectionHeadText}>{t("about.header2")}</h2> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="lg:flex lg:justify-between gap-20">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-start'
        >
          {t("about.description")}
        </motion.p> */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-start'
        >
          {`Marketing professional with over 4+ years of experience in brand management, market analysis, and
          campaign execution. Proven track record in increasing brand awareness and driving sales growth. Seeking
          to leverage expertise in digital marketing and strategic planning to contribute to a dynamic marketing
          team.`}
        </motion.p>
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
            <img src={photo} alt="Mohanad" className={`${isMobile ? 'hidden' : 'w-[250px] rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'}`}/>
          </motion.div>
        </Tilt>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");