import React, { useState } from 'react'
import Toggle from './Togglebutton/Toggle'
import Links from './links/Links'
import {motion} from "framer-motion";
import "../Sidebar/Sidebar.scss";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },

  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
function Sidebar() {
const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div>
        <Toggle setOpen={setOpen}></Toggle>
    </motion.div>
  )
}

export default Sidebar