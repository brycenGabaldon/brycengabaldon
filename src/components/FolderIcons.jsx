import React from "react";
import { data } from "../iconData";
import Buttons from "./File";



export default function FolderStatus({isActive}) {

  console.log("child");
console.log(isActive);

return (
isActive ? [<ClosedFolder />] : [<OpenFolder />])
  
};

function ClosedFolder() {

  return (
    <div className="Hide" >
      <div className="Roww">
      {data.icons.slice(0, 3).map((icon, id) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons"
              style={icon.style}
              labelClass="LabelHide"
              key={id}
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
   
            />
        );
      })}</div>
            <div className="Roww">
      {data.icons.slice(3, 6).map((icon, id) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons"
              style={icon.style}
              labelClass="LabelHide"
              key={id}
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
            />
        );
      })}</div>
            <div className="Roww">
      {data.icons.slice(6, 9).map((icon, id) => {
        return (

            <Buttons
              isActive=''
              setIsActive=''
              iconClass="Icons"
              style={icon.style}
              labelClass="LabelHide"
              key={id}
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
      {data.icons.slice(3, 6).map((icon, key) => {
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
      {data.icons.slice(6, 9).map((icon, key) => {
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
