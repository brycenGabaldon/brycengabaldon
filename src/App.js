import "./App.scss";
import React from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import FolderIcons from "./components/FolderIcons";
import DockIcons from "./components/DockIcons";
import Clock from "./Clock";

export default function App() {

  return (
    <>
      <div className="App">
        <div className="ClockBanner"><Clock /></div>
     <div className="UnderBanner"><FolderIcons /></div>
      <DockIcons />
      </div>

    </>
  );
}
