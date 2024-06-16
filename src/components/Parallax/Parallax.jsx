// import React, { useRef } from 'react'
import "../Parallax/parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion"

function Parallax() {

    const {scrollYProgress} = useScroll({
        offset:["start start", "end start"]
    });

    const scroll = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const Text = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className="parallax">
        <motion.h1 style={{y: Text}}  >About Me</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{y: scroll}} className="planets"></motion.div>
        <motion.div style={{x: scroll}} className="stars"></motion.div>
       
    </div>
  )
}

export default Parallax