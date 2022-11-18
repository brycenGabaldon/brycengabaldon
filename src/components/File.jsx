import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";



const Buttons = ({ iconClass, label, labelClass, name, buttonClass, id, iconName, page, isActive, folder}) => {
  const navigate = useNavigate();






  const handleSubmit = async() => {


    try {
      navigate(String(page));
    } catch (err) {

    }
  };
console.log(isActive)
  return (
    <div className={"Spacing"} key={Math.floor(1 + Math.random() * 10000)}>
      <motion.div className={buttonClass} key={Math.floor(1 + Math.random() * 10000)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={isActive && folder ? ()=> handleSubmit() : handleSubmit()}>
        <button
          key={Math.floor(1 + Math.random() * 10000)}
          className={iconClass}
  
          >
          <div className={labelClass} key={Math.floor(1 + Math.random() * 10000)}>
            {label}
          </div>
        </button>
      </motion.div>

    </div>
  );
};

export default Buttons;

/* {
  [
    "section_btn",
    tab === id ? "active" : null // <-- conditionally apply active class
  ]
    .filter(Boolean)
    .join(" ")
} */
