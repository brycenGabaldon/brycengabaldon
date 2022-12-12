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
          <Helmet>
<iframe src="https://widget.tagembed.com/75511?view" style=" width:100%;height:500px;overflow: auto;" frameborder="0" allowtransparency="true"></iframe>
</Helmet>
           
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
