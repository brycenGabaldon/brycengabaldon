import React from "react";
import ReactDom from "react-dom";
import { Helmet } from "react-helmet";

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
      <Helmet></Helmet>
      {isActive
        ? [
            <div className="Overlay" style={MODAL_STYLES} onClick={handleClick}>
              {children}
            </div>,
          ]
        : [
            <div>
                   <Helmet>
                   <div id="curator-feed-default-feed-layout">
                    
                    <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
                    </div>
                    
                    <script type="text/javascript">{'(function(){var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";i.src="https://cdn.curator.io/published/f2607526-e3b0-465e-992e-697ed873dfc4.js";e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);})();'}</script>


                   </Helmet>
           
              <div
                onClick={handleClick}
                className=""
                style={MODAL_STYLES}
              ></div>
            </div>,
          ]}
    </>,
    document.getElementById("portal")
  );
}
