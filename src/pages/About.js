import React from 'react'
import { motion } from 'framer-motion';
import './pages.scss';

const MODAL_STYLES = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'red',
    padding: '50px',
    zIndex: 1000
  
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  
  }
export default function About({ open4, children , onClose4 }) {
    if (!open4) return null

  return (
    <>
    <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1, animationDuration: 50 }} transition={{ duration: .5}} onClick={onClose4} style={OVERLAY_STYLES}>
    </motion.div>
    <motion.div initial={{ y: '-150%', x: '-50%' }} animate={{ y: '-58%', x: '-50%' }} transition={{
  delay: 0.1,
  y: { duration: .2 },
  default: { ease: "linear" }
}} style= {MODAL_STYLES} className=" AboutModal shadow-xl Modal">

    {children}</motion.div>
    </>
  )
}
