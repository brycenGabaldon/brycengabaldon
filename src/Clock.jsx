import React from "react";
import { auth } from "./firebase"

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {    this.setState({      date: new Date()    });  }
    render() {
      return (
        <div>
          <h2 className="Clock">{this.state.date.toLocaleTimeString()}<br/>{auth.currentUser.email}.</h2>

        
        </div>
      );
    }
  }
  