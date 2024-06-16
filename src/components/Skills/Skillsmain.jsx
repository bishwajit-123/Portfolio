import React from 'react';
import Html from '../../assets/Images/html.webp';
import Css from '../../assets/Images/css.webp';
import Java from '../../assets/Images/js.jpg';
import Tail from '../../assets/Images/tailwin.jpg';
import Boot from '../../assets/Images/bootstrap.jpg';
import Reat from '../../assets/Images/react.png';
import Redux from '../../assets/Images/redux1.png';
import Node from '../../assets/Images/node.png';
import Git from '../../assets/Images/git.png';
import Fire from "../../assets/Images/fire.png";
import '../Skills/skillsmain.scss';

function Skillsmain() {
  
  return (
    <div className=" mx-auto  bg-[#111132] bg-gradient-to-r from-[#0c0c1d] to-[#111132] back">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="flex justify-center py-5">
          <img src={Html} className="w-15 h-20 md:w-40 md:h-40 hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Css} className="w-15 h-20 md:w-40 md:h-40  hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Boot} className="w-15 h-20 md:w-40 md:h-40 rounded-full p-2 hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Tail} className="w-15 h-20 md:w-40 md:h-40 rounded-full hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Java} className="w-15 h-20 md:w-40 md:h-40 rounded-full hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Reat} className="w-15 h-20 md:w-40 md:h-40 rounded-full hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className=" flex justify-center py-5 past">
          <img src={Redux} className="w-15 h-20 md:w-40 md:h-40  hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Node} className="w-15 h-20 md:w-40 md:h-40 rounded-full hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

        <div className="flex justify-center py-5">
          <img src={Git} className="w-15 h-20 md:w-40 md:h-40 rounded-full hover:scale-110 transition-all duration-300 group-hover:rotate-6" />
        </div>

      
      </div>
    </div>
  );
}

export default Skillsmain;
