import React, { useEffect } from "react";
import { data } from "./iconData"
import Buttons from "./File";
import { motion } from "framer-motion";






export default function FolderStatus({isActive, setIsActive, sliceValue1 ,sliceValue2, phoneNumber, email, loaded}) {

  useEffect(() => {

    const interval = setInterval(() => {
    


    }, 1000);
    return () => clearInterval(interval);

  },);
  return (
  
  loaded&&
  <div style={{zIndex:100}}><motion.div  
      
      className="folders" ><OpenFolder phoneNumber={phoneNumber} loaded={loaded}
      email={email} sliceValue1={sliceValue1} sliceValue2={sliceValue2} folderOpen={isActive ? "Show": "Show21"} disabled={isActive} id="open" key={Math.floor(1 + Math.random() * 10000)} isActive={isActive} /></motion.div> </div>)}


function OpenFolder({isActive, folderOpen, sliceValue1, sliceValue2, phoneNumber, email, loaded}) {


  useEffect(() => {

    const interval = setInterval(() => {
    
    }, 1000);
    return () => clearInterval(interval);

  },);
  return (
   
      <div className={folderOpen} key={Math.floor(1 + Math.random() * 10000)}>
        
        {data.icons.slice(sliceValue1, sliceValue2).map((icon) => {
          return (

            loaded && <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              iconClass={"Icons1 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass={icon.labelClass}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
              isActive={isActive}
              page={icon.page}
              folder={true}
              useIcon={icon.userIcon}
            userIcon={icon.label}
              iconPass={icon.iconPass}
              href={String(icon.href)}
              phoneNumber= {phoneNumber}
              email={email}
              loaded={loaded}
            />
            
          );
        })}
      </div>

  );
}


