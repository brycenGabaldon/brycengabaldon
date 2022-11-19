import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: 0,
  bottom: "75%",
  left: 0,
  right: "75%",
  backgroundColor: "rgba(0, 0, 0, 0)",
  zIndex: 1000,
};

export default function ModalPortal({ isActive, children, handleClick }) {
  return ReactDom.createPortal(
    <>
      {isActive
        ? [
            <div className="Overlay" style={MODAL_STYLES} onClick={handleClick}>
              {children}
            </div>,
          ]
        : [
            <div>hello
          
           
              <div
                onClick={handleClick}
                className=""
                style={MODAL_STYLES}
              ></div>
            </div>,
          ]}
    </>,
    document.getElementById("portal").ATTRIBUTE_NODE.class="Instagram"
  );
}
