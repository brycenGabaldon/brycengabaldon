import React from "react";
import ReactDom from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const MODAL_STYLES = {
  positon: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
};

export default function ModalPortal({
  isActive,
  children,
  handleClick

}) {
  return ReactDom.createPortal(
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="Overlay"
            style={MODAL_STYLES}
            onClick={handleClick}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1}}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.getElementById("portal")
  );
}
