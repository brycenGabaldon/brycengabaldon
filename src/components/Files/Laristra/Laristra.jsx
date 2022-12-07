import React from "react";
import { motion } from "framer-motion";
import Carousel from "framer-motion-carousel";
import "./LaRistra.scss";
const Laristra = () => {

const ArrAbout = [
    "https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/207432691_5746020535440191_3198068188816278373_n.png?alt=media&token=506ada26-889b-4188-9b63-9bbf3136abac",
    "https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/207432691_5746020535440191_3198068188816278373_n.png?alt=media&token=506ada26-889b-4188-9b63-9bbf3136abac",
    "https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/207432691_5746020535440191_3198068188816278373_n.png?alt=media&token=506ada26-889b-4188-9b63-9bbf3136abac",
    "https://firebasestorage.googleapis.com/v0/b/brycengabaldon-41bc3.appspot.com/o/207432691_5746020535440191_3198068188816278373_n.png?alt=media&token=506ada26-889b-4188-9b63-9bbf3136abac",
    
]



  return (
    <div className="LaRistraBack">
      {" "}
      <div className="KitchenBack ">
        <div className="NewMexicanKitchen drop-shadow-2xl"></div>
      </div>
      <div className="HeaderLogo drop-shadow-2xl"> </div>
      <div className="RistraButtonContainer0">
        <div className="RistraButtonContainer2">
          <div className="RistraButton">
            <Carousel interval="7000">
              {ArrAbout.map((item, i) => (
                <img
                  draggable="false"
                  src={item}
                  key={i}
                  width="100%"
                  alt=""
                />
              ))}
            </Carousel>
          </div>
 

       
          <div className="RistraButton">
            <Carousel interval="4000">
              {ArrAbout.map((item, i) => (
                <img
                  draggable="false"
                  src={item}
                  key={i}
                  width="100%"
                  alt=""
                />
              ))}
            </Carousel>
          </div>
          <div className="RistraButton">
            <Carousel interval="6000">
              {ArrAbout.map((item, i) => (
                <img
                  draggable="false"
                  src={item}
                  key={i}
                  width="100%"
                  alt=""
                />
              ))}
            </Carousel>
          </div>

          <div className="RistraButton">
            <Carousel interval="5000">
              {ArrAbout.map((item, i) => (
                <img
                  draggable="false"
                  src={item}
                  key={i}
                  width="100%"
                  alt=""
                 
             
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laristra;
