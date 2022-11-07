
import "./folder.scss"
import React, { useState } from "react";
import '../pages/pages.scss';
import { motion } from "framer-motion";
import Services from "./folderClick";

export default function Folder(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
      <div className="Folder_box" 
      >
        <motion.div className={
        isNavExpanded ? "OpenFolder" : "ButtonContainer_folder Zoom"} >
        <div className="FlexRow" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            </div>

            <div className="FlexRow" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
            <div className="Center_folder"></div>
            </div>
        <div className="FlexRow" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}></div>
        <div className="ModalContainers" ></div>
        <Services onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
            </Services>
            
        </motion.div>
      </div>
      
    )
}
