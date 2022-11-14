import "./App.scss";
import React, { useState } from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from './components/folderIcons';



export default function App() {

const [isActive, setIsActive] = useState(false)


console.log('first false')
const handleClick = () => {
  !isActive ? setIsActive(!isActive) : setIsActive(isActive)
}


  return (
    <>
    
      <div className="App">
        <div className="ClockBanner"><Clock /></div>
     <div className="UnderBanner">


      <div className="foClass" onClick={()=>handleClick()}>
      <FolderStatus isActive={isActive} setIsActive={setIsActive}/>  
      </div>
      </div>
    



      <DockIcons />

      </div>
    </>
  );
} 

