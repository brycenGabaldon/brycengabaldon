import React from "react";
import "./foodtruck.scss";
import { GiFoodTruck } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { MdManageAccounts, MdFoodBank } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";

const FoodTruck = () => {
  return (
    <div className="FoodBack">
      <div className="FirstContainer">
        <motion.div className="FoodIcons" whileTap={{scale: 0.9}} whileHover={{ scale: 1.2 }}>
          <MdFoodBank size="100%" style={{ color: "yellow" }} />
        </motion.div>
        <motion.div className="FoodIcons" whileTap={{scale: 0.9}} whileHover={{ scale: 1.2 }}>
          <BiFoodMenu size="100%" style={{ color: "yellow" }} />
        </motion.div>
        <motion.div className="FoodIcons" whileTap={{scale: 0.9}} whileHover={{ scale: 1.2 }}>
          <GiFoodTruck size="100%" style={{ color: "yellow" }} />
        </motion.div>
        <motion.div className="FoodIcons" whileTap={{scale: 0.9}} whileHover={{ scale: 1.2 }}>
          {" "}
          <MdManageAccounts size="100%" style={{ color: "yellow" }} />
        </motion.div>
        <motion.div className="FoodIcons" whileTap={{scale: 0.9}} whileHover={{ scale: 1.2 }}>
          <SiGooglemaps size="100%" style={{ color: "yellow" }} />
        </motion.div>
      </div>
      <div className="SecondContainer">

        hello
      </div>
      <div className="ThirdContainer"></div>
    
    </div>
  );
};

export default FoodTruck;
