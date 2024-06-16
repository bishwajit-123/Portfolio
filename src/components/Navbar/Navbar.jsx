import React from 'react'
import "../Navbar/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from '../Sidebar/Sidebar';
import Github from "../../assets/Images/github.svg";
import Lind from "../../assets/Images/lind.svg";
import Twitter from "../../assets/Images/twitter.svg";


function Navbar() {
  return (
    <div className="navbar">
      <Sidebar/>
         <div className="wrapper">
            <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.5}}>Portfolio</motion.span>
            <div className="social">
                <a href="https://github.com/bishwajit-123" className='button'><img src = {Github} /></a>
                <a href="https://www.linkedin.com/in/bishwajit-paul-05197a226/" className='button'><img src={Lind}/></a>
                <a href="#" className='button'><img src={Twitter}/></a>
            </div>
         </div>
    </div>
  )
}

export default Navbar