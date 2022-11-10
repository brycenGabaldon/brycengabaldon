import React from 'react';
import { data } from '../iconData'
import { motion } from 'framer-motion';


export default function Buttons() {

    
  return (
    <div className='Roww'>
      {data.icons.map((icon, key) => {
        return <div className="Spacing">
            <button className="buttons1 aspect-w-1 aspect-h-1" >
            <motion.button
        className={icon.iconClass} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}
        style={icon.style}>
        <div className={icon.labelClass} >
      {icon.name}</div>
      </motion.button>
      </button>
    </div>
      })}
    </div>
  );
}