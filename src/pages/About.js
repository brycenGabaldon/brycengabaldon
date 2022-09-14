import React from 'react'
import { motion } from 'framer-motion';
import './pages.scss';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
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
    <div style={OVERLAY_STYLES}></div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style= {MODAL_STYLES} className="shadow-xl ServiceModal">
    <button onClick={onClose4} className="shadow-m hover:shadow-xl CloseButton">x</button>
    {children}</motion.div>
    </>
  )
}
