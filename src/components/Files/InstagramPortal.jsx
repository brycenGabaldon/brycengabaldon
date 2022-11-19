import React from "react";
import ReactDom from "react-dom";



export default function InstagramPortal({
  isActive,
  children,
  handleClick

}) {
  return ReactDom.createPortal(
    <>
      
        {isActive ? [
          <div

            onClick={handleClick}>
            {children}
          </div>
        ]
      
      :[<div>{children}<div onClick={handleClick} className="" ></div></div>]}
    </>,
    document.getElementById("instagram")
  );
}
