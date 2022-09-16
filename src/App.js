import "./App.scss";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import About from "./pages/About";
import React, { useState } from "react";
import '../src/pages/pages.scss';
import { motion } from "framer-motion";
import Jobber from "./jobberForm";
import "./Jobber.scss";


export default function App() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  

  return (
    <>
      <div className="App" id="appResize">
     <div id="backButtonContainer" /> <button id="backButton"> Back</button>
     <Jobber refId="f6f2802e-49e8-477b-b405-8b2b18dded97" />
        <div className="ButtonContainer" id="appToggle">

          <motion.button className= "Services shadow-lg  hover:shadow-gray-500/50 Button Big" whileHover={{ scale: 1.05 }} onClick={() => setIsOpen1(true)} whileTap={{ scale: 0.95 }}>
            {" "}
            Services
          </motion.button>

          <motion.button className="Contact shadow-lg  hover:shadow-gray-500/50 Button Small" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen2(true)}>
            {" "}
            Contact
          </motion.button>

          <motion.button className="Book shadow-lg  hover:shadow-gray-500/50 Button Small"  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen3(true)}>
            {""}
            Book Appointment
          </motion.button>
          <motion.button  className="About shadow-lg hover:shadow-gray-500/50 Button Big"  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen4(true)}>
            {" "}
            About us
          </motion.button>



          <Services open1={isOpen1} onClose1={() => setIsOpen1(false)}>
            </Services>

            <Contact open2={isOpen2} onClose2={() => setIsOpen2(false)}>
            </Contact>

            <Book open3={isOpen3} onClose3={() => setIsOpen3(false)}>
            </Book>

            <About open4={isOpen4} onClose4={() => setIsOpen4(false)}>
            </About>
        </div>
      </div>

    </>
    
  );
}
