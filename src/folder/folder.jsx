
import "./folder.scss"
import React, { useState } from "react";
import '../pages/pages.scss';
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";



export default function Folder(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (
      <div className="Folder_box" 
      >
        <div className={
        isNavExpanded ? "Overlay" : "None"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}></div>

        <motion.div className={
        isNavExpanded ? "OpenFolder" : "ButtonContainer_folder Zoom"} onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          
        <div className="FlexRow">
            <div className="Center_folder aspect-w-1 aspect-h-1">
              <FaYoutube className="Icon" style={{ color: 'black', fontSize: '1rem', height: '100%', width: '100%'}}/>
              </div>
            <div className="Center_folder aspect-w-1 aspect-h-1"></div>
            <div className="Center_folder aspect-w-1 aspect-h-1"></div>
            </div>

            <div className="FlexRow" >
            <div className="Center_folder aspect-w-1 aspect-h-1"></div>
            <div className="Center_folder aspect-w-1 aspect-h-1"></div>
            <div className="Center_folder aspect-w-1 aspect-h-1"></div>
            </div>
        <div className="FlexRow" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <div className="Center_folder aspect-w-1 aspect-h-1"></div>
          <div className="Center_folder aspect-w-1 aspect-h-1"></div>
          <div className="Center_folder aspect-w-1 aspect-h-1"></div>
        </div>
        <div className="ModalContainers" ></div>
        </motion.div>
      
      </div>
      
    )
}
