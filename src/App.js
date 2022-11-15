import React, { useState } from "react";
import "./Icon.scss";
import Clock from "./Clock";
import DockIcons from "./components/DockIcons";
import FolderStatus from "./components/FolderIcons"
import "./components/IconStyle.scss"

export default function App() {
  const [isActive, setIsActive] = useState(true);





  console.log("setActive");
  console.log({ isActive });
  console.log("app is Open");
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
            onClick={() =>
              isActive ? setIsActive(!isActive) : setIsActive(isActive)
            }
          ></div>
            <FolderStatus
              isActive={isActive}
              setIsActive={setIsActive}
              key={Math.floor(1 + Math.random() * 10000)}

            />
            <FolderStatus
              isActive={isActive}
              setIsActive={setIsActive}
              key={Math.floor(1 + Math.random() * 10000)}

            />
          
          <div
            className={isActive ? "" : "Overlay"}
            onClick={() => setIsActive(!isActive)}
            key={Math.floor(1 + Math.random() * 10000)}
          >
            {" "}
          </div>
       
      </div>
      <div>

        <DockIcons />
      </div>
    </>
  );
}