import React from "react";
import { data } from "./iconData"
import Buttons from "./File";
import { auth } from "../firebase";

export default function DockIcons() {

 

  return (
    <div 

    
    className="ContainerDock" key={Math.floor(1 + Math.random() * 10000)}>
        {data.icons.slice(3, 7).map((icon, i) => {
          return (
            <Buttons
              key={Math.floor(1 + Math.random() * 10000)}
              iconClass={"Icons2 aspect-w-1 aspect-h-1 shadow-lg  hover:shadow-gray-500/50 " + icon.label + icon.iconClass}
     
              labelClass="buttonLabel1"
              name={icon.name}
              buttonClass="buttons2 aspect-w-1 aspect-h-1"
              icon={icon.icon}
              iconName={"/"+icon.iconName}
              label={icon.label}
              id={icon.key}
              page={icon.page}
              folder={true}
              isActive="true"
              iconPass={icon.iconPass}
              href={String(icon.href)}
              useIcon={icon.userIcon}
              userIcon={auth.currentUser}

              
              
            />
          );
        })}
      </div>

  );
}
