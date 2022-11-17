import React from "react";
import { data } from "./iconData"
import Buttons from "./File";
import { motion } from "framer-motion";
import ModalPortal from "./ModalPortal";






export default function FolderStatus({isActive, handleClick, folders}) {

console.log("before function")

  return true
    ? [<motion.div onClick={()=>handleClick()} className="folders" initial={{scale:3}} animate={{ scale: 1}} ><OpenFolder id="closed" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive} handleClick={()=>handleClick(folders.id)}/></motion.div>]

    : 
    
    [<motion.div  className="folders" initial={{ position: "fixed", top: "20%", left: "50%" }} animate={{ scale: 3, position: "fixed", top: "40%", left: "40%", zIndex: "1000"}} ><OpenFolder   id="open" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive} /><ModalPortal onClick={()=>handleClick(folders.id)} isActive={isActive} /></motion.div>];

    
}


function OpenFolder({isActive, handleClick, val1, val2}) {

  console.log("check is open")






  return (
   
      <div className="Hide" key={Math.floor(1 + Math.random() * 10000)}>
        
        {data.icons.slice(val1, val2).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              iconClass={"Icons aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass={!isActive ? icon.labelClass : "labelHide"}
              
              buttonClass="buttons aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={!isActive ? icon.label : ""}
              isActive={isActive}
            />
          );
        })}
      </div>

  );
}


// {"images/" + this.props.name}