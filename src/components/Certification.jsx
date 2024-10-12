/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { motion } from "framer-motion";
  
  import "react-vertical-timeline-component/style.min.css";
  
  import { styles } from "../styles";
  import { certifications } from "../constants";
  import { SectionWrapper } from "../hoc";
  import { textVariant } from "../utils/motion";

  const CertificationCard = ({ certification }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={certification.date}
        iconStyle={{ background: certification.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={certification.icon}
              alt={certification.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        {/* <div onClick={() => window.open(certification.link, "_blank")}> */}
        <div>
          <h3 className='text-white text-[24px] font-bold'>{certification.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{certification.company_name}</p>
          <p className='text-secondary text-[8px] font-semibold' style={{ margin: 0 }}>{certification.location}</p>
          {/* <button className='text-secondary text-[8px] font-semibold' style={{ margin: 0, fontSize: 10 }}><a href={certification.link}>Check certification</a></button> */}
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {certification.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      </VerticalTimelineElement>
    );
  };
  
  const Certification = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            WHAT I HAVE DONE SO FAR
          </p>
          <h2 className={styles.sectionHeadText}>
            Education & Certifications
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {certifications.map((certification, index) => (
              <CertificationCard
                key={`certification-${index}`}
                certification={certification}
              />
            ))}
          </VerticalTimeline>
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Certification, "work");