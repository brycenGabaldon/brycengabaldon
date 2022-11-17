import React from "react";
import { data } from "./iconData"
import Buttons from "./File";


export default function DockIcons() {

  return (
    <div className="ContainerDock" key={Math.floor(1 + Math.random() * 10000)}>
        {data.icons.slice(0, 4).map((icon) => {
          return (

            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass={"Icons2 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
              style={icon.style}
              labelClass="buttonLabel1"
              name={icon.name}
              buttonClass="buttons2 aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={icon.iconName}
              label={icon.label}
              
            />
          );
        })}
      </div>

  );
}
