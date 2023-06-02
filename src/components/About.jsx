import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ivo } from "../assets";
import { about } from "../constants";

import ServiceCard from "../common/ServiceCard";


const About = () => {
    console.log(about.info);
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
            </motion.div>

            <img src={ivo} alt="ivo" className="xs:w-[250px] w-full" />
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'
            >
                {about.info}
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");