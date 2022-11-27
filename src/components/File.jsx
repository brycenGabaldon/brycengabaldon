import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GiLotus } from "react-icons/gi";
import { auth } from "../firebase";

const Buttons = ({
  iconClass,
  label,
  labelClass,
  href,
  buttonClass,
  id,
  iconName,
  page,
  isActive,
  folder,
  iconPass,
  userIcon,
  useIcon
}) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      navigate(String(page));
    } catch (err) {}
  };
  console.log(isActive);
  return (
    <div className={"Spacing"} key={Math.floor(1 + Math.random() * 10000)}>
      <motion.div
        className={buttonClass}
        key={Math.floor(1 + Math.random() * 10000)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={isActive && folder && handleSubmit}
      ><img className="drop-shadow-lg" style={{borderRadius: '50%'}} src={userIcon ? [useIcon && auth.currentUser.photoURL]  : "" } alt=""/>
        <a
          target="_blank"
          {...(label === "LinkedIn" ? ' rel="noopener noreferrer" ' : "")}
          {...(href === "" ? "" : (href = { href }))}
        >
          <button
            key={Math.floor(1 + Math.random() * 10000)}
            className={iconClass}
            disabled={!isActive}
          >
            {iconPass ? <GiLotus /> : ""}
            <div
              className={labelClass}
              key={Math.floor(1 + Math.random() * 10000)}
            >
              {label}
            </div>
          </button>
        </a>
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
