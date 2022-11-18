import React, { useState } from "react";
import { data } from "./iconData"
import Buttons from "./File";
import { motion } from "framer-motion";
import ModalPortal from "./ModalPortal";






export default function FolderStatus({isActive, setIsActive}) {
 

  return !isActive
    ? [<div className="Overlay1" isActive={isActive}><motion.div onClick={()=>setIsActive(previsActive => true)} className="folders" initial={{scale:3}} animate={{ scale: 1}} ><OpenFolder id="closed" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive}/></motion.div> </div>]

    : 
    
    [<div className="Overlay2"><motion.div  className="folders" initial={{ position: "fixed", top: "20%", left: "50%" }} animate={{ scale: 3, position: "fixed", top: "40%", left: "40%", zIndex: "1000"}} ><OpenFolder  disabled={isActive} id="open" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive} /><ModalPortal onClick={()=>setIsActive(previsActive => !isActive)} isActive={isActive} /></motion.div><div className="Overlay2" isActive={isActive} onClick={()=>setIsActive(previsActive => false)}></div> </div>];

    
}


function OpenFolder({isActive}) {

  console.log("check is open")
const [isFolder, setIsFolder] = useState(true)





  return (
   
      <div className="Hide" key={Math.floor(1 + Math.random() * 10000)}>
        
        {data.icons.slice(0, 5).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              iconClass={"Icons aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass={isActive ? icon.labelClass : "labelHide"}
              
              buttonClass="buttons aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={isActive ? icon.label : ""}
              isActive={isActive}
              page={icon.page}
              folder={isFolder}
            />
          );
        })}
      </div>

  );
}


// {"images/" + this.props.name}