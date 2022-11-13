import React from "react";
import { data } from "../iconData";
import Buttons from "./File";



export default function FolderStatus(props) {

const isOpen = props.isActive


  function checkActive() {
    props.isActive ? props.setIsActive(!props.isActive) : props.setIsActive(!props.isActive)
  }

  if (isOpen) {
    return <div onClick={()=>checkActive()}>
      <OpenFolder   />
    <div className="Overlay" onClick={props.setIsActive(!props.isActive)}></div>
    </div>;
  }
  if (!isOpen) {
    return <div className="folderOverlay">
      <div className="folderOverlay">
      <ClosedFolder  /></div>

    </div>;
  }
}

function ClosedFolder() {




  return (
    <div className="Hide" >
      <div className="Roww">
      {data.icons.slice(0, 3).map((icon, key) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons"
              style={icon.style}
              labelClass="LabelHide"
              key={key}
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
   
            />
        );
      })}</div>
            <div className="Roww">
      {data.icons.slice(3, 6).map((icon, key) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons"
              style={icon.style}
              labelClass="LabelHide"
              key={key}
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
            />
        );
      })}</div>
            <div className="Roww">
      {data.icons.slice(6, 9).map((icon, key) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons"
              style={icon.style}
              labelClass="LabelHide"
              key={key}
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
            />
        );
      })}</div>
    </div>
  );
}

function OpenFolder(props) {




  return (
    <div className="Show"  >
      <div className="Roww">
      {data.icons.slice(0, 3).map((icon, key) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons1"
              style={icon.style}
              labelClass={icon.labelClass}
              key={key}
              name={icon.name}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
   
            />
        );
      })}</div>
            <div className="Roww1">
      {data.icons.slice(0, 3).map((icon, key) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons1"
              style={icon.style}
              labelClass={icon.labelClass}
              key={key}
              name={icon.name}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
   
            />
        );
      })}</div>
            <div className="Roww1">
      {data.icons.slice(0, 3).map((icon, key) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons1"
              style={icon.style}
              labelClass={icon.labelClass}
              key={key}
              name={icon.name}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
   
            />
        );
      })}</div>
    </div>
  );
}
