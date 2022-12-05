import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
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
  useIcon,
  handleProjects,
  handleSocials,
  handleContact

}) => {
  const navigate = useNavigate();
console.log( {iconPass})
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
        onClick={label === "Projects " ? handleProjects : label=== "Socials " ? handleSocials: label=== "Contact " ? handleContact : handleSubmit}
      >
        <a
          target="_blank"
          {...(label === "LinkedIn" ? ' rel="noopener noreferrer" ' : "")}
          {...(href === "" ? "" : (href = { href }))}
        >
          <button
            key={Math.floor(1 + Math.random() * 10000)}
            className={iconClass}
            disabled={!isActive}
          ><img className="drop-shadow-lg" style={{borderRadius: '1rem'}} src={userIcon ? [useIcon && auth.currentUser.photoURL]  : "" } alt=""/>
            {iconPass ? <FaHouseUser color="white" size="100%" /> : ""}
            <div
              className={labelClass}
              key={Math.floor(1 + Math.random() * 10000)}
            >
              { !iconPass && label}
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
