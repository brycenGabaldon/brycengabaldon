import React from 'react'
import { motion } from 'framer-motion';
import './pages.scss';
import Jobber from '../jobberForm';
import "../Jobber.scss";




  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  
  }

export default function Book({ open3, children , onClose3 }) {
    if (!open3) return null

  return (
    <>
    <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1, animationDuration: 50 }} transition={{ duration: .5}} onClick={onClose3} style={OVERLAY_STYLES}></motion.div>
    <Jobber />
    </>
  )
}
