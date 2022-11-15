import React from "react";
import { data } from "./iconData"
import Buttons from "./File";

export default function FolderStatus({ isActive }) {
  console.log("child");
  console.log(isActive);

  return isActive
    ? [<ClosedFolder key={Math.floor(1 + Math.random() * 10000)} />]
    : [<OpenFolder key={Math.floor(1 + Math.random() * 10000)} />];
}

function ClosedFolder() {
  return (
    <div className="Hide" key={Math.floor(1 + Math.random() * 10000)}>
      <div className="Roww" key={Math.floor(1 + Math.random() * 10000)}>
        {data.icons.slice(0, 3).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass="LabelHide"
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
            />
          );
        })}
      </div>
      <div className="Roww">
        {data.icons.slice(3, 6).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass="LabelHide"
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
            />
          );
        })}
      </div>
      <div className="Roww">
        {data.icons.slice(6, 9).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass="LabelHide"
              name={icon.name}
              buttonClass="buttons aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
            />
          );
        })}
      </div>
    </div>
  );
}

function OpenFolder() {
  return (
    <div className="Show" key={Math.floor(1 + Math.random() * 10000)}>
      <div className="Roww" key={Math.floor(1 + Math.random() * 10000)}>
        {data.icons.slice(0, 3).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons1 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              style={icon.style}
              labelClass={icon.labelClass}
              name={icon.label}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
              iconName={icon.iconName}
              label={icon.label}
            />
          );
        })}
      </div>
      <div className="Roww1">
        {data.icons.slice(3, 6).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons1 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass={icon.labelClass}
              name={icon.name}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
            />
          );
        })}
      </div>
      <div className="Roww1">
        {data.icons.slice(6, 9).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons1 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              labelClass={icon.labelClass}
              name={icon.name}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
            />
          );
        })}
      </div>
    </div>
  );
}


// {"images/" + this.props.name}