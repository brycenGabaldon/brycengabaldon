import React, { useState } from "react";
import { data } from "../iconData";
import Buttons from "./File";

export default function FolderIcons() {
  const [folderIsActive, setFolderIsActive] = useState(false);

  const handleFolderClick = () => {
    folderIsActive ?
    setFolderIsActive(!folderIsActive) : setFolderIsActive(folderIsActive)
  };

  return (
    <div className={folderIsActive ? "Hide" : "Show"}>
      <div className={folderIsActive ? "Roww" : "Roww1"}>
      {data.icons.slice(0, 3).map((icon, key) => {
        return (

            <Buttons
              isActive={folderIsActive}
              setIsActive={setFolderIsActive}
              iconClass={icon.iconClass}
              style={icon.style}
              labelClass={icon.labelClass}
              key={key}
              name={icon.name}
   
            />
        );
      })}</div>
            <div className={folderIsActive ? "Roww" : "Roww1"}>
      {data.icons.slice(3, 6).map((icon, key) => {
        return (

            <Buttons
              isActive={folderIsActive}
              setIsActive={setFolderIsActive}
              iconClass={icon.iconClass}
              style={icon.style}
              labelClass={icon.labelClass}
              key={key}
              name={icon.name}
   
            />
        );
      })}</div>
            <div className={folderIsActive ? "Roww" : "Roww1"}>
      {data.icons.slice(6, 9).map((icon, key) => {
        return (

            <Buttons
              isActive={folderIsActive}
              setIsActive={setFolderIsActive}
              iconClass={icon.iconClass}
              style={icon.style}
              labelClass={icon.labelClass}
              key={key}
              name={icon.name}
          
            />

        );
      })}</div>
    </div>
  );
}
