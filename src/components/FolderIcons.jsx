import React from "react";
import { motion } from "framer-motion";
import { data } from "../iconData";

class FolderIcons extends React.Component {

    state = { 
      isActive: true 

    };

handleOverlayClick = () => {
  this.setState({
    isActive: !this.state.isActive
  });
}

  handleClick = () => {
    if(this.state.isActive === true) {
    
    this.setState({
      isActive: !this.state.isActive
    });}
  };
  render() {
    return (
 
      <div
          className={this.state.isActive ? "Hide" : "Show"}
          onClick={this.handleClick}
        > 
          <div className={this.state.isActive ? "Roww" : "Roww1"}>
            {data.icons.slice(0, 3).map((icon, index) => {
              return (
                <div className="Spacing" key={index}>
        <div className={this.state.isActive ? "buttons aspect-w-1 aspect-h-1" : "buttons1 aspect-w-1 aspect-h-1"}>
                    <motion.button
                      className={this.state.isActive ? "Icons" : "Icons1"}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={this.state.isActive ? "LabelHide" : "buttonLabel"}>{icon.name}</div>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={this.state.isActive ? "Roww" : "Roww1"}>
            {data.icons.slice(3, 6).map((icon, index) => {
              return (
                <div className="Spacing" key={index}>
        <div className={this.state.isActive ? "buttons aspect-w-1 aspect-h-1" : "buttons1 aspect-w-1 aspect-h-1"}>
                    <motion.button
                      className={this.state.isActive ? "Icons" : "Icons1"}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={this.state.isActive ? "LabelHide" : "buttonLabel"}>{icon.name}</div>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={this.state.isActive ? "Roww" : "Roww1"}>
            {data.icons.slice(6, 9).map((icon, index) => {
              return (
             

                <div className="Spacing" key={index}>
                  <div className={this.state.isActive ? "buttons aspect-w-1 aspect-h-1" : "buttons1 aspect-w-1 aspect-h-1"}>
                    <motion.button
                      className={this.state.isActive ? "Icons" : "Icons1"}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      style={icon.style}
                    >
                      <div className={this.state.isActive ? "LabelHide" : "buttonLabel"}>{icon.name}</div>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={this.state.isActive ? "" : "Overlay"} onClick={this.handleOverlayClick}>
        </div>
</div>
    );
          }
  }

export default FolderIcons;