/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { google } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      initial="hidden" 
      animate="show"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] cursor-pointer">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={google}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const loadMoreProjects = () => {
    setVisibleProjects((prevCount) => Math.min(prevCount + 3, projects.length));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>MY WORK</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {`Following projects showcases my skills. Each project is briefly described with links to Google drive.`}
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={loadMoreProjects}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue-500"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");