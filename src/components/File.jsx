import React from 'react';
import { data } from '../iconData'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Buttons() {
    
  return (
    <div className='Roww'>
      {data.icons.map((iconn, key) => {
        return <div className="Spacing" key={iconn.key}>
            <button className="buttons1 aspect-w-1 aspect-h-1" >
            <motion.button
        className={iconn.iconClass} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }}
        style={iconn.style}>
            <a href={iconn.ref}>
            <FontAwesomeIcon icon={iconn.icon} /> 
          </a>
        <div className={iconn.labelClass} >
      {iconn.name}</div>
      </motion.button>
      </button>
    </div>
      })}
    </div>
  );
}