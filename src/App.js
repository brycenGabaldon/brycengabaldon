import "./App.scss";
import React, { useState } from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/folderIcons";



export default function App() {
  const [isActive, setIsActive] = useState(false);
console.log('setActive');
console.log({isActive});
  return (
    <>
      <div className="App">
        <div className="ClockBanner">
          <Clock />
                                </div>
          <div className={"UnderBanner"}>


<div onClick={() => isActive ? setIsActive(!isActive) : setIsActive(isActive)}>
            <FolderStatus isActive={isActive} setIsActive={setIsActive}/>
</div>
<div className={isActive ? "" : "Overlay"} onClick={()=>setIsActive(!isActive)}> </div>
          </div>
        </div>
        <div>
  <DockIcons />
      </div>
    </>
  );
}
