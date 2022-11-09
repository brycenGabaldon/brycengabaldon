import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";


const Icon = (props) => {

  return (
    <div className="Spacing">
    <button className="buttons1 aspect-w-1 aspect-h-1" id={props.id}
    
    >
      <motion.div
        className="Icons1 aspect-w-1 aspect-h-1 {props.iconImg} shadow-lg  hover:shadow-gray-500/50 Button Small" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}
        style={{ color: "{props.iconColor}" }}
      >
<div className={props.labelClass}>
        {props.label}</div>

      </motion.div>


    </button>
    </div>
  );
};

Icon.propTypes = {
  id: PropTypes.string,
  iconImg: PropTypes.string,
  iconColor: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  active: PropTypes.string,
  visible: PropTypes.string,
};

export default Icon;
