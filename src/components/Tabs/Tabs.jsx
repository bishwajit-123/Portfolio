import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import "../../App.css";
import "../Tabs/Tabs.scss";



let tabs = [
    { id: "world", label: "About Me" },
    { id: "ny", label: "Education" },
    { id: "business", label: "Achievements" },
 
  ];


function Tabs() {
    let [activeTab, setActiveTab] = useState(tabs[0].id); 
    const gradientStyle = {
        background: 'linear-gradient(100deg, #111132, #0c0c1d)',
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


  return (
    <>
    <div className="flex justify-center py-10 bg-gradient-to-r from-[#0c0c1d] to-[#111132]" style={gradientStyle} >
    <div className="flex space-x-1" >
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`${
          activeTab === tab.id ? "" : "hover:text-white/60"
        } relative rounded-full px-3 py-1.5 md:text-xl text-sm font-sans text-white outline-sky-400 transition focus-visible:outline-2`}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {activeTab === tab.id && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 z-10 bg-white mix-blend-difference"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        {tab.label}
      </button>
    ))}
  </div>
  
  </div>


    <div className="mt-5 text-white flex justify-center p-1 ">
    {activeTab === 'world' && <div className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center bg-gradient bg-gradient-to-r from-blue-900 transition-all duration-800">
      <div className="text-justify tracking-normal italic text-white " >
        <p> I am a passionate front-end developer with a strong skill set in design and problem-solving. Proficient in HTML, CSS,
          JavaScript, React.js and Redux-Toolkit.I strive to create visually appealing and interactive user Interfaces. With a
          disciplined approach, I excel in writing clean code and optimizing performance, I am enthusiastic about leveraging
          frameworks like React.Js to build dynamic web applications. As a motivated professional, I bring a combination of
          creativity and technical expertise to deliver exceptional front-end solutions</p>
      </div>
      </div>}
    {activeTab === 'ny' && <div className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center bg-gradient bg-gradient-to-l from-blue-900 transition-all duration-800">
      <div className="text-center" >
      <h1 className="text-[#D2649A]">&#8226; 2016 - (10th)</h1>
      <h1>Central Public School</h1>
      <br></br>

      <h1 className="text-[#D2649A]">&#8226; 2018 - (12th)</h1>
      <h1>Central Public School</h1>
      <br></br>

      <h1 className="text-[#D2649A]">&#8226; 2019-2023  (B.E)</h1>
      <h1>T. John Institute of Technology</h1>
      </div>
    </div>}
    {activeTab === 'business' && <div className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center  bg-gradient bg-gradient-to-r from-blue-900 transition-all duration-800">
  <div className="text-center">
    <h1 className="text-[#D2649A]">&#8226; IJAEM - (2023)</h1>
    <h1>Published a Paper in IJAEM </h1>
    <br></br>

    <h1 className="text-[#D2649A]">&#8226;  ICAMsnt - (2023)</h1>
    <h1>Present a paper at the International Conference on Advance in Modern Science and Technology</h1>
    <br></br>

    <h1 className="text-[#D2649A]">&#8226;  Technical Fest - (2023)</h1>
    <h1>T. John Institute of Technology Awarded a 1st Prize in Intra College Technical Fest</h1>
  </div>
</div>
}

  </div>
 

  </>


  
  )
}

export default Tabs