import React from "react";

import { motion } from "framer-motion";

const Buttons = ({
  isActive,
  setIsActive,
  type,
  iconClass,
  style,
  labelClass,
  name,
  buttonClass
}) => {


  return (
    <div className={"Spacing"} >
      <div
        className={buttonClass}
        
      >
        <motion.button
          className={iconClass}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          style={style}
        >
          <div className={labelClass
          }>{name}</div>
        </motion.button>
      </div>
    </div>
  );
};

export default Buttons;
