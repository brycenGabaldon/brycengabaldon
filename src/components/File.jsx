import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";


const Buttons = ({
  iconClass,
  label,
  labelClass,
  href,
  buttonClass,

  page,
  isActive,
  folder,
  iconPass,

  style
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
        onClick={isActive && folder && handleSubmit}
        style={style}
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
          ><img className="drop-shadow-lg" style={{borderRadius: '1rem', backgroundSize: "contain",  scale: ".9", }} src={label === "LaRistra "? ["https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/207432691_5746020535440191_3198068188816278373_n.png?alt=media&token=506ada26-889b-4188-9b63-9bbf3136abac"]  : [ label === "Lotus " ? "https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/Screenshot%202022-12-07%20at%2010.04.12%20AM.png?alt=media&token=3e984a42-7150-4d3c-9425-95b937a86c34" : ""] }  alt=""/>
                   {iconPass ? <FaHouseUser color="white" size="100%" /> : ""}
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
