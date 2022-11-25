import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Component = ({children, backgroundColor, className}) => {

  const navigate = useNavigate();

  const handleSubmit = async() => {


    try {
      navigate("/home");
    } catch (err) {

    }
  };

    return (
        <div>
        
        <motion.div className="Outer lotus2" initial={{scale:0}} animate={{scale: 1}}>
        <div className="Inner" style={{backgroundColor}}>

{children}


</div></motion.div><div className="Overlay3" onClick={()=>handleSubmit()}></div></div>
    );
  };

  export default Component;