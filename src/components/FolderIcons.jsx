import React from "react";
import { motion } from "framer-motion";
import { data } from "../iconData";

class FolderIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }
  render() {
    return (
      <div classname="folderOverlayOn folderOverlayOff">
        <div
          className={this.state.isActive ? "Hide" : "Show"}
          onClick={this.handleClick}
        >
          <div className="Roww">
            {data.icons.slice(4, 7).map((icon, key) => {
              return (
                <div className="Spacing">
                  <button className="buttons1 aspect-w-1 aspect-h-1">
                    <motion.button
                      className={icon.iconClass}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={icon.labelClass}>{icon.name}</div>
                    </motion.button>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="Roww">
            {data.icons.slice(7, 10).map((icon, key) => {
              return (
                <div className="Spacing">
                  <button className="buttons1 aspect-w-1 aspect-h-1">
                    <motion.button
                      className={icon.iconClass}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={icon.labelClass}>{icon.name}</div>
                    </motion.button>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="Roww">
            {data.icons.slice(10, 13).map((icon, key) => {
              return (
                <div className="Spacing">
                  <button className="buttons1 aspect-w-1 aspect-h-1">
                    <motion.button
                      className={icon.iconClass}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={icon.labelClass}>{icon.name}</div>
                    </motion.button>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FolderIcons;
