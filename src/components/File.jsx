import { motion } from "framer-motion";
import React, {useState} from "react";
import ModalPortal from "./ModalPortal";



const Buttons = ({ iconClass, label, labelClass, name, buttonClass, id, iconName}) => {
  const [isOpen, setIsOpen] = useState(false);
  function childToParent() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={"Spacing"} key={Math.random()}>
      <motion.div className={buttonClass} key={Math.random()} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <button
          key={Math.floor(1 + Math.random() * 10000)}
          className={iconClass} onClick={()=>setIsOpen(true)}
  
          ><i className={"iconitag" +iconName}></i>
          <div className={labelClass} key={Math.random()}>
            {label}
          </div>
        </button>
      </motion.div>

        <ModalPortal open={isOpen} onclose={()=>setIsOpen(false)} childToParent={childToParent}>
          hello portal
        </ModalPortal>
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
