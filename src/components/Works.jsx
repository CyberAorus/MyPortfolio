import React from 'react';

import { motion } from "framer-motion";
import {     textVariant } from '../utils/motion';
import { projects } from '../constants';
import { styles } from '../utils/styles';

import { SectionWrapper } from '../hoc';
import ProjectCard from '../common/ProjectCard';


const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>My Work</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, 'projects');