import React from "react";
import { motion } from "framer-motion";
import { data } from "../iconData";

class FolderIcons extends React.Component {

    state = { 
      isActive: true 
    };



  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  render() {
    return (
      <div className={this.state.isActive ? "" : "Overlay"}> 
      <div
          className={this.state.isActive ? "Hide" : "Show"}
          onClick={this.handleClick}
        > 
          <div className="Roww">
            {data.icons.slice(0, 3).map((icon, index) => {
              return (
                <div className="Spacing" key={index}>
                  <button className="buttons1 aspect-w-1 aspect-h-1">
                    <motion.button
                      className={icon.iconClass}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={this.state.isActive ? "LabelHide" : "buttonLabel"}>{icon.name}</div>
                    </motion.button>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="Roww">
            {data.icons.slice(3, 6).map((icon, index) => {
              return (
                <div className="Spacing" key={index}>
                  <button className="buttons1 aspect-w-1 aspect-h-1">
                    <motion.button
                      className={icon.iconClass}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={this.state.isActive ? "LabelHide" : "buttonLabel"}>{icon.name}</div>
                    </motion.button>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="Roww">
            {data.icons.slice(6, 9).map((icon, index) => {
              return (
                <div className="Spacing" key={index}>
                  <button className="buttons1 aspect-w-1 aspect-h-1">
                    <motion.button
                      className={icon.iconClass}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={this.state.isActive ? "LabelHide" : "buttonLabel"}>{icon.name}</div>
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