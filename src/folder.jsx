
import "./folder.scss"
import React, { useState } from "react";
import '../src/pages/pages.scss';
import { motion } from "framer-motion";


export default function Folder(){

    return (
      <div className="Folder">
        <div className="ButtonContainer_folder">
          <motion.div className="IconDock_folder shadow-2xl" initial={{ y: '150%', x: '0%', scale:1.2, opacity:.5}} animate={{ y: '0%', x: '0%', scale:1, opacity:1 }} transition={{
    delay: 0.5,
    y: { duration: .3 },
      default: { ease: "linear" }}}>
          <div className="Center">
          <motion.button className= "Services shadow-lg  hover:shadow-gray-500/50 Button_folder Big" whileHover={{ scale: 1.2 }}  whileTap={{ scale: 0.95 }}>

            {" "}
          </motion.button>
          <div className="Text">Services</div>
          </div>

<div className="Center">
          <motion.button className="Contact shadow-lg  hover:shadow-gray-500/50 Button_folder Small" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} >
            {" "}
          </motion.button>

          <div className="Text">Contact</div>
         </div>

          <div className="Center">
            <motion.button className= "Book shadow-lg  hover:shadow-gray-500/50 Button_folder Small" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} >
            {" "}
          </motion.button>
          <div className="Text">Book</div>
          </div>
         
          <div className="Center">
         <motion.button  className="About shadow-lg hover:shadow-gray-500/50 Button_folder Big"  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} >

            {" "}
          </motion.button>

          <div className="Text">About</div>
          </div>
          </motion.div>
        </div>
      </div>
    )
}
