import "./App.scss";
import React from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import FolderIcons from "./components/FolderIcons";
import Clock from "./Clock";
import Buttons from "./components/File"; 




export default function App() {

  return (
    <>

      <div className="App">
        <div className="ClockBanner"><Clock /></div>
     <div className="UnderBanner"><FolderIcons /></div>
     
 <div className="ContainerDock">
      <Buttons /></div>

      </div>

    </>
  );
}
