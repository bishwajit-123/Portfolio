import React from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import "../portfolio/portfolio.scss";
import { useRef } from 'react';
import Ecomm from "../../assets/Images/Ecomm.png";
import Wet from "../../assets/Images/weather.png";
const items = [
    {
        id: 1,
        title: "Weather App",
        img: Ecomm,
        url: "https://forecast-infinite-scroll.netlify.app/",
        desc: " I developed a e-commerce website, overseeing its conception, design, and implementation. Leveraging my expertise in fronted development, I crafted an intuitive user interface using HTML, Tailwind CSS (CSS Framework), and React (JavaScript Framework), ensuring seamless navigation and responsiveness across various devices, On the back end, I demonstrated proficiency in Firebase. "
    },

    {
        id: 2,
        title: "Ecomm App",
        img: Wet,
        url: "https://forecast-infinite-scroll.netlify.app/",
        desc: " I developed a weather app using HTML, Tailwind CSS, and React.js, featuring real-time weatherupdates for global cities. React-Router DOM facilitated page navigation, while Axios handled API integration forseamless data fetching. Utilizing React Infinite Scroll, the app loads content as users scrolled, enhancing usability.This project highlights my proficiency in frontend development, API integration, and user-centric design, showcasing my ability to create impactful software solutions."
    },

    // {
    //     id: 3,
    //     title: "Weather App",
    //     img: "https://cdn.pixabay.com/photo/2024/01/20/12/59/blue-tit-8521052_640.jpg",
    //     url: "https://paulecommerce.netlify.app/",
    //     desc: "I developed a weather app using HTML, Tailwind CSS, and React.js, featuring real-time weather updates for global cities. React-Router Tailwind CSS, and React.js, featuring real-time weather Tailwind CSS, and React.js, featuring real-time weather"
    // },

    // {
    //     id: 4,
    //     title: "Weather App",
    //     img: "https://cdn.pixabay.com/photo/2024/01/20/12/59/blue-tit-8521052_640.jpg",
    //     desc: "I developed a weather app using HTML, Tailwind CSS, and React.js, featuring real-time weather updates for global cities. React-Router Tailwind CSS, and React.js, featuring real-time weather Tailwind CSS, and React.js, featuring real-time weather"
    // },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,    
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const handleButtonClick = () => {
        window.location.href = item.url;
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""></img>
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleButtonClick}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="Portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;
