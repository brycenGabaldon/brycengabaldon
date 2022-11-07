
import "./folder.scss"
import React, { useState } from "react";
import '../pages/pages.scss';
import { motion } from "framer-motion";

export default function Folder(){
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isOverlayOpen, setisOverlayOpen] = useState(false)

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
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            </div>

            <div className="FlexRow" >
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            </div>
        <div className="FlexRow" >
          <div className="Center_folder"></div>
          <div className="Center_folder"></div>
          <div className="Center_folder"></div>
        </div>
        <div className="ModalContainers" ></div>
        </motion.div>
      
      </div>
      
    )
}
