import React from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
const MODAL_STYLES = {
  position: 'fixed',
  top: 0,
  bottom: "75%",
  left: 0,
  right: "50%",
  backgroundColor: 'rgba(0, 0, 0, .0)',
  zIndex: 1000,
};

export default function ModalPortal({
  isActive,
  children,
  handleClick

}) {console.log("modal"+isActive)

const navigate = useNavigate();

const handleSubmit = async() => {


  try {
    navigate("/home");
  } catch (err) {

  }
};
  return ReactDom.createPortal(
    <>
      
        {!children ? [
          <div
            className="Overlay"
            style={{background: "white"}}
            onClick={()=>handleSubmit()}>
            {children}
          </div>
        ]
      
      :[<div>{children}<div onClick={handleClick} className="" style={MODAL_STYLES}></div></div>]}
    </>,
    document.getElementById("portal")
  );
}
