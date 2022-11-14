import React from "react";
import { data } from "../iconData";
import Buttons from "./File";

export default function DockIcons() {
  return (
    <div className="ContainerDock" key={Math.floor(1 + Math.random() * 10000)}>
      <div className="Roww" key={Math.floor(1 + Math.random() * 10000)}>
        {data.icons.slice(9, 13).map((icon) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              isActive=""
              setIsActive=""
              iconClass="Icons1"
              style={icon.style}
              labelClass="buttonLabel"
              name={icon.name}
              buttonClass="buttons1 aspect-w-1 aspect-h-1"
            />
          );
        })}
      </div>
    </div>
  );
}
