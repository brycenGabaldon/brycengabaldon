import React from "react";
import { motion } from "framer-motion";
import "./LaRistra.scss";
const Laristra = () => {
  return (
    <div className="LaRistraBack">
 
        {" "}
          
          <div className="KitchenBack ">
          <div className="NewMexicanKitchen drop-shadow-2xl"></div></div>
          
          
          
               <div className="HeaderLogo drop-shadow-2xl"> </div>
          
          <div className="RistraButtonContainer0">
<div className="RistraButtonContainer1">
<motion.div  whileHover={{scale: 1.1}} className="RistraButton">About Us</motion.div>
          <motion.div  whileHover={{scale: 1.1}} className="RistraButton">Menu</motion.div></div>
     
          <div className="RistraButtonContainer2">
          <motion.div  whileHover={{scale: 1.1}} className="RistraButton">Catering</motion.div>
          <motion.div  whileHover={{scale: 1.1}} className="RistraButton">Shop</motion.div>

          
          </div>
      </div>
    </div>
  );
};

export default Laristra;
