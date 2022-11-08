import React from 'react'

import { motion } from 'framer-motion';
import './pages.scss';
import '../App';

const MODAL_STYLES = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  
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
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1, animationDuration: 50 }} transition={{ duration: .5}} onClick={onClose1} style={OVERLAY_STYLES}></motion.div>
      <motion.div  className="ServiceModal2 shadow-xl Modal" initial={{ y: '-150%', x: '-50%' }} animate={{ y: '-58%', x: '-50%' }} transition={{
    delay: 0.1,
    y: { duration: .2 },
    default: { ease: "linear" }
  }} style= {MODAL_STYLES}>
  <div className='ServiceModal'> 
  <a className='website' href="https://brycengabaldon.com/">Website: BrycenGabaldon.com</a>
  <a className='phoneNumber' href="tel:602-816-1523"> Phone Number: 602-816-1523 </a>
  </div>
      </motion.div>
      </>
    )
  }
