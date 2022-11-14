import React from "react";
import { data } from "../iconData";
import Buttons from "./File";

export default function DockIcons() {


  return (
    <div className="ContainerDock">
      <div className="Roww">
      {data.icons.slice(0, 4).map((icon, id) => {
        return (

            <Buttons
            isActive=''
            setIsActive=''
            iconClass="Icons1"
            style={icon.style}
            labelClass="buttonLabel"
            key={id}
            name={icon.name}
            buttonClass="buttons1 aspect-w-1 aspect-h-1"
            />

        );
      })}</div>

    </div>
  );
}
