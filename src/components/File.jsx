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
}) => {


  return (
    <div className={"Spacing"} onClick={(isActive ? "Icons" : "Icons1")}>
      <div
        className={isActive ? "buttons aspect-w-1 aspect-h-1" : "buttons1 aspect-w-1 aspect-h-1"}
        
      >
        <motion.button
          className={isActive ? "Icons" : "Icons1"}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
          style={style}
        >
          <div className={isActive ? "LabelHide" : "buttonLabel"}>{name}</div>
        </motion.button>
      </div>
    </div>
  );
};

export default Buttons;
