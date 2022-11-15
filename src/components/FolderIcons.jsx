import React, { useState} from "react";
import { data } from "./iconData"
import Buttons from "./File";



let appStates = [
  0, 0, 0
];


export default function FolderStatus({ isActive}) {
  console.log("child");
  console.log(isActive);


  return isActive
    ? [<ClosedFolder key={Math.floor(1 + Math.random() * 10000)} />]
    : [<OpenFolder key={Math.floor(1 + Math.random() * 10000)} />];
}

function ClosedFolder({setOpen4, open4}) {


  return (

      <div className="Hide" key={Math.floor(1 + Math.random() * 10000)}>
        
        {data.icons.slice(0, 9).map((icon) => {
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
  );
}

function OpenFolder({open4, setOpen4}) {
  console.log(open4)
  console.log("check is open")

  const [isactive, setActive] = useState(
    appStates
  );

  
  function handleClick(index) {
    const nextOpen = isactive.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter

       return c;
      } else {
        // The rest haven't changed

        return !c;
      }
    });
    setActive(nextOpen);
    console.log(nextOpen);
  } 

  return (
   
      <div className="Show" key={Math.floor(1 + Math.random() * 10000)}>
        
        {data.icons.slice(0, 9).map((icon) => {
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
              setOpen4={setOpen4}
              open4={open4}
              onClick={()=>handleClick()}
            />
          );
        })}
      </div>

  );
}


// {"images/" + this.props.name}