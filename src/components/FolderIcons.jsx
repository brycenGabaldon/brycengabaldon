import React from "react";
import { data } from "./iconData"
import Buttons from "./File";
import { motion } from "framer-motion";






export default function FolderStatus({isActive, setIsActive, sliceValue1 ,sliceValue2}) {


  return !isActive
    ? 
    
    [<div><motion.div onClick={()=>setIsActive(previsActive => true)} className="folders" ><OpenFolder sliceValue1={sliceValue1} sliceValue2={sliceValue2} folderOpen="Hide fadeOut" id="closed" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive}/></motion.div></div>]

    : 
    
    [<div ><motion.div  className="folders" ><OpenFolder sliceValue1={sliceValue1} sliceValue2={sliceValue2} folderOpen="Show fadeIn" disabled={isActive} id="open" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive} /></motion.div> </div>];

    
}


function OpenFolder({isActive, folderOpen, sliceValue1, sliceValue2}) {



  return (
   
      <div className={folderOpen} key={Math.floor(1 + Math.random() * 10000)}>
        
        {data.icons.slice(sliceValue1, sliceValue2).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              iconClass={isActive ? ["Icons1 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass] : ["Icons aspect-w-1 aspect-h-1 shadow-lg hover:shadow-gray-500/50 "] + icon.label + icon.iconClass}
              labelClass={isActive ? icon.labelClass : "labelHide"}
              buttonClass={isActive ? "buttons1 aspect-w-1 aspect-h-1" : "buttons aspect-w-1 aspect-h-1"}
              icon={icon.icon}
              iconName={icon.iconName}
              label={isActive ? icon.label : ""}
              isActive={isActive}
              page={icon.page}
              folder={true}

              iconPass={icon.iconPass}
              href={String(icon.href)}
            />
          );
        })}
      </div>

  );
}


// {"images/" + this.props.name}