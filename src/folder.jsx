
import "./folder.scss"
import React from "react";
import '../src/pages/pages.scss';
import { motion } from "framer-motion";


export default function Folder(){

    return (
      <div className="Folder_box" >
        <motion.div className="ButtonContainer_folder Zoom" >
        <div className="FlexRow" >
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            </div>

            <div className="FlexRow">
            <div className="Center_folder"></div>
            </div>
        <div className="FlexRow"></div>
        </motion.div>
      </div>
    )
}
