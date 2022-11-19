import React from "react";
import { motion } from "framer-motion";



const Jobber = ({children, backgroundColor}) => {


    return (
        <div>
        
        <motion.div className="Outer"initial={{scale:0}} animate={{scale: 1}} whileHover={{scale:1.1}}>
        <div className="Inner" style={{backgroundColor}}>

{children}


</div></motion.div><div className="Overlay3"></div></div>
    );
  };

  export default Jobber;