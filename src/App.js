import "./App.scss";
import React from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderIcons from "./components/FolderIcons";



export default function App() {

  return (
    <>
    
      <div className="App">
        <div className="ClockBanner"><Clock /></div>
     <div className="UnderBanner"></div>
     
<FolderIcons />



      <DockIcons />

      </div>
<div className='' ></div>
    </>
  );
} 

