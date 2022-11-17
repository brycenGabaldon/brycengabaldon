import { motion } from "framer-motion";
import React from "react";



const Buttons = ({ iconClass, label, labelClass, name, buttonClass, id, iconName}) => {

  return (
    <div className={"Spacing"} key={Math.floor(1 + Math.random() * 10000)}>
      <motion.div className={buttonClass} key={Math.floor(1 + Math.random() * 10000)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
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
