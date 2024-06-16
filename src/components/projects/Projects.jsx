// import React, { useRef } from 'react'
import "../projects/projects.scss";
import {motion, useScroll, useTransform} from "framer-motion"

function Project() {

    const {scrollYProgress} = useScroll({
        offset:["start start", "end start"]
    });

    const scroll = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
    // const Text = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className="parallaxx">
        <motion.h1 >Featured Works</motion.h1>
        <motion.div className="mountainss"></motion.div>
        <motion.div style={{y: scroll}} className="planetss"></motion.div>
        <motion.div style={{x: scroll}} className="starss"></motion.div>
       
    </div>
  )
}

export default Project;