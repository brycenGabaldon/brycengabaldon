import "./App.scss";
import React from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import FolderIcons from "./components/FolderIcons";
import Clock from "./Clock";
import Buttons from "./components/File"; 
import ViewImages from "./taskManager/AppBackground";



export default function App() {

  return (
    <>
    
      <div className="App"><ViewImages />
        <div className="ClockBanner"><Clock /></div>
     <div className="UnderBanner"><FolderIcons /></div>
     
 <div className="ContainerDock">
      <Buttons /></div>

      </div>

    </>
  );
}
