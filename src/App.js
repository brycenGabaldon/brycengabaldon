import "./App.scss";
import React, { useState } from "react";
import "./components/pages/pages.scss";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/folderIcons";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  console.log("setActive");
  console.log({ isActive });
  return (
    <>
      <div className="App" key={Math.floor(1 + Math.random() * 10000)}>
        <div
          className="ClockBanner"
          key={Math.floor(1 + Math.random() * 10000)}
        >
          <Clock />
        </div>
        <div
          className={"UnderBanner"}
          key={Math.floor(1 + Math.random() * 10000)}
        >
          <div
            onClick={() =>
              isActive ? setIsActive(!isActive) : setIsActive(isActive)
            }
          >
            <FolderStatus
              isActive={isActive}
              setIsActive={setIsActive}
              key={Math.floor(1 + Math.random() * 10000)}
            />
          </div>
          <div
            className={isActive ? "" : "Overlay"}
            onClick={() => setIsActive(!isActive)}
            key={Math.floor(1 + Math.random() * 10000)}
          >
            {" "}
          </div>
        </div>
      </div>
      <div>
        <DockIcons />
      </div>
    </>
  );
}