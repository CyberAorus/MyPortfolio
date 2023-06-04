import React from 'react';

import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { styles } from '../styles';

import { SectionWrapper } from '../hoc';
import ProjectCard from '../common/ProjectCard';


const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Work</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    The projects listed below were built with the aim of enhancing educational experiences.
                    Couple of these projects were developed while I was enrolled in my courses.
                    
                </motion.p>
            </div>

            <div className='mt20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, 'work');