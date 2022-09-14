import React from 'react'
import { motion } from 'framer-motion';
import './pages.scss';
import '../App';

const MODAL_STYLES = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
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
export default function Services({ open1, children , onClose1 }) {
    if (!open1) return null

  return (
    <>
    <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}onClick={onClose1} style={OVERLAY_STYLES}></motion.div>
    <motion.div initial={{ y: '-150%', x: '-50%' }} animate={{ y: '-58%', x: '-50%'}}  style= {MODAL_STYLES} className="shadow-xl ServiceModal">

    {children}</motion.div>
    </>
  )
}
