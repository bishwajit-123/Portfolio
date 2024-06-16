// import React, { useRef } from 'react'
import "../Skills/skills.scss"
import {motion, useScroll, useTransform} from "framer-motion"

function Skills() {

    const {scrollYProgress} = useScroll({
        offset:["start start", "end start"]
    });

    const scroll = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);
    // const Text = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className="parallaxx">
        <motion.h1 >Technical Skills</motion.h1>
        <motion.div className="mountainss"></motion.div>
        <motion.div style={{y: scroll}} className="planetss"></motion.div>
        <motion.div style={{x: scroll}} className="starss"></motion.div>
       
    </div>
  )
}

export default Skills