import React from 'react';
import "../hero/hero.scss";
import { ReactTyped } from "react-typed";
import Profile from "../../assets/Images/Profile.png";
import Scroll from "../../assets/Images/scroll.png";
import { motion } from 'framer-motion';
import Pdf from "../../assets/Images/Bishwajit paul - [Resume].pdf"


const textVariants = {
    initial: {
        x: 200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

function Hero() {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = Pdf; 
        link.download = 'Bishwajit Resume.pdf';
        link.click();
       
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2>BISHWAJIT PAUL</motion.h2>
                    <motion.h1 variants={textVariants}>
                        <ReactTyped strings={["Front-End Developer","Back-End Developer"]} typeSpeed={200} loop={true} />
                    </motion.h1>
                    <div className="buttons">
                        <button onClick={handleDownloadResume}>Download Resume</button>
                    <a href="#Contact"><button>Contact Me</button></a> 
                    </div>
                    <motion.img className='scroll' variants={textVariants} animate="scrollButton" src={Scroll} />
                </motion.div>
            </div>
            <motion.div className="slidingContainer" variants={sliderVariants} initial="initial" animate="animate">
                Bishwajit Paul Bishwajit
            </motion.div>
            <div className="imageContainer">
                <img src={Profile} alt="Profile" />
            </div>
        </div>
    );
}

export default Hero;
