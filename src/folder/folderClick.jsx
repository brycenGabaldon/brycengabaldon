import React from 'react'
import { motion } from 'framer-motion';
import './folderClickStyles.scss';
import '../App';

const MODAL_STYLES = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
  
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: -100,
    bottom: 0,
    left: 0,
    right: -100,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  
  }
export default function Services({ open1, children , onClose1 }) {
    if (!open1) return null

  return (
    <>
    <div className="Folder_box" >
        <motion.div className="ButtonContainer_folder"  >
        <div className="FlexRow" >
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            <div className="Center_folder"></div>
            </div>

            <div className="FlexRow" >
            <div className="Center_folder"></div>
            </div>
        <div className="FlexRow"></div>
        <div className="ModalContainers" ></div>
            
        </motion.div>
      </div>
    </>
  )
}
