import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";



const Buttons = ({ iconClass, label, labelClass, name, buttonClass, id, iconName, page}) => {
  const navigate = useNavigate();






/*   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      navigate("/TaskManager");
    } catch (err) {

    }
  }; */

  return (
    <div className={"Spacing"} key={Math.floor(1 + Math.random() * 10000)}>
      <motion.div className={buttonClass} key={Math.floor(1 + Math.random() * 10000)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={()=>navigate(String(page))}>
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
