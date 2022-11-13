import React, { useState } from "react";
import { data } from "../iconData";
import Buttons from "./File";

export default function DockIcons() {
  const [dockActive, setDockIsActive] = useState(false);

  return (
    <div className="ContainerDock">
      <div className="Roww">
      {data.icons.slice(10, 14).map((icon, key) => {
        return (

            <Buttons
              isActive={dockActive}
              setIsActive={setDockIsActive}
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
