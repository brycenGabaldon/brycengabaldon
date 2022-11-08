import "./App.scss";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import About from "./pages/About";
import React, { useState } from "react";
import '../src/pages/pages.scss';
import { motion } from "framer-motion";
import Jobber from "./jobberForm"
import Folder from "./folder/folder";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function App() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  

  return (
    <>
      <div className="App">

        <div className="Wallpaper" >
<div>
  <Folder/>
</div>

<div className="ButtonContainer">
          <motion.div className="IconDock shadow-2xl" initial={{ y: '150%', x: '0%', scale:1.2, opacity:.5}} animate={{ y: '0%', x: '0%', scale:1, opacity:1 }} transition={{
    delay: 0.5,
    y: { duration: .3 },
      default: { ease: "linear" }}}>
          <div className="Center">
          <motion.button className= "Services shadow-lg  hover:shadow-gray-500/50 Button Big" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <a href="tel:602-816-1523">
              <FaPhoneAlt style={{color: 'rgba(199, 199, 199, 1)', fontSize: '2rem', height: '100%', width: '100%'}}/>
          
          </a>
          </motion.button>
          <div>Call</div>
          </div>

<div className="Center">
          <motion.button className="Mail shadow-lg  hover:shadow-gray-500/50 Button Small" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
            <a href="mailto:brycengabaldon@gmail.com">
          <FaEnvelope style={{color: 'rgba(199, 199, 199, 1)', fontSize: '2rem', height: '100%', width: '100%'}}/>
          </a>
          </motion.button>

          <div>E-Mail</div>
         </div>

          <div className="Center">
            <motion.button className= "Book shadow-lg  hover:shadow-gray-500/50 Button Small" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen3(true)}>
            {" "}
          </motion.button>
          <div>Book</div>
          </div>
         
          <div className="Center">
         <motion.button  className="About shadow-lg hover:shadow-gray-500/50 Button Big"  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen4(true)}>

            {" "}
          </motion.button>

          <div>About</div>
          </div>
</motion.div>

<div className="ModalContainers">
  
          <Services open1={isOpen1} onClose1={() => setIsOpen1(false)}>
            </Services>

            <Contact open2={isOpen2} onClose2={() => setIsOpen2(false)}>
            </Contact>

            <Book open3={isOpen3} onClose3={() => setIsOpen3(false)}>

            <div id="jobberContainer"><Jobber /></div>

            </Book>

            <About open4={isOpen4} onClose4={() => setIsOpen4(false)}>

            </About>
            </div>

            </div>
        </div>
      </div>

    </>
    
  );
}
